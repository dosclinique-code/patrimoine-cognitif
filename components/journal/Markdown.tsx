import Link from "next/link";
import type { ReactNode } from "react";

type Block =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul" | "ol"; items: string[] };

/**
 * Rendu sobre du Markdown utilisé par le Journal.
 * Pas de HTML brut : le texte est passé en enfants React, donc échappé.
 */
export default function Markdown({ source }: { source: string }) {
  const blocks = parseBlocks(source);

  return (
    <div>
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="font-serif text-2xl md:text-3xl text-creme mt-14 mb-5 leading-tight"
        >
          {renderInline(block.text, `h2-${index}`)}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="font-serif text-xl md:text-2xl text-creme mt-10 mb-4 leading-tight"
        >
          {renderInline(block.text, `h3-${index}`)}
        </h3>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-2 border-or bg-or/5 pl-6 pr-4 py-5 my-8"
        >
          <p className="font-serif text-xl text-creme italic leading-relaxed">
            {renderInline(block.text, `q-${index}`)}
          </p>
        </blockquote>
      );
    case "ul":
      return (
        <ul
          key={index}
          className="list-disc pl-6 mb-6 space-y-2 text-lg text-creme/80 font-sans leading-relaxed"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item, `ul-${index}-${itemIndex}`)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={index}
          className="list-decimal pl-6 mb-6 space-y-2 text-lg text-creme/80 font-sans leading-relaxed"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item, `ol-${index}-${itemIndex}`)}</li>
          ))}
        </ol>
      );
    default:
      return (
        <p
          key={index}
          className="text-lg text-creme/80 leading-relaxed font-sans mb-6"
        >
          {renderInline(block.text, `p-${index}`)}
        </p>
      );
  }
}

function parseBlocks(source: string): Block[] {
  const lines = source
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\r\n/g, "\n")
    .split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("## ") || line.startsWith("# ")) {
      blocks.push({ type: "h2", text: line.replace(/^#{1,2}\s+/, "").trim() });
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].startsWith(">")) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push({ type: "quote", text: quote.join(" ").trim() });
      continue;
    }

    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*] /.test(lines[index])) {
        items.push(lines[index].replace(/^[-*] /, "").trim());
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\. /.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\. /, "").trim());
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
}

function isBlockStart(line: string): boolean {
  return (
    line.startsWith("#") ||
    line.startsWith(">") ||
    /^[-*] /.test(line) ||
    /^\d+\. /.test(line)
  );
}

function renderInline(text: string, key: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let plainStart = 0;

  const pushPlain = (end: number) => {
    if (end > plainStart) nodes.push(text.slice(plainStart, end));
  };

  while (cursor < text.length) {
    if (text.startsWith("**", cursor)) {
      const end = text.indexOf("**", cursor + 2);
      if (end !== -1) {
        pushPlain(cursor);
        nodes.push(
          <strong key={`${key}-b-${cursor}`} className="font-semibold text-creme">
            {renderInline(text.slice(cursor + 2, end), `${key}-b-${cursor}`)}
          </strong>
        );
        cursor = end + 2;
        plainStart = cursor;
        continue;
      }
    }

    if (text[cursor] === "*" && text[cursor + 1] !== "*") {
      const end = text.indexOf("*", cursor + 1);
      if (end !== -1) {
        pushPlain(cursor);
        nodes.push(
          <em key={`${key}-i-${cursor}`}>
            {renderInline(text.slice(cursor + 1, end), `${key}-i-${cursor}`)}
          </em>
        );
        cursor = end + 1;
        plainStart = cursor;
        continue;
      }
    }

    if (text[cursor] === "[") {
      const labelEnd = text.indexOf("]", cursor + 1);
      if (labelEnd !== -1 && text[labelEnd + 1] === "(") {
        const hrefEnd = text.indexOf(")", labelEnd + 2);
        if (hrefEnd !== -1) {
          const label = text.slice(cursor + 1, labelEnd);
          const href = text.slice(labelEnd + 2, hrefEnd);
          if (isSafeHref(href)) {
            pushPlain(cursor);
            nodes.push(renderLink(href, label, `${key}-a-${cursor}`));
            cursor = hrefEnd + 1;
            plainStart = cursor;
            continue;
          }
        }
      }
    }

    cursor += 1;
  }

  pushPlain(text.length);
  return nodes;
}

function renderLink(href: string, label: string, key: string) {
  const className =
    "text-creme underline underline-offset-4 decoration-creme/25 hover:decoration-creme transition-colors";
  const children = renderInline(label, key);

  if (href.startsWith("/")) {
    return (
      <Link key={key} href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      key={key}
      href={href}
      className={className}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function isSafeHref(href: string): boolean {
  if (href.startsWith("/") && !href.startsWith("//")) return true;
  return href.startsWith("https://") || href.startsWith("http://") || href.startsWith("mailto:");
}
