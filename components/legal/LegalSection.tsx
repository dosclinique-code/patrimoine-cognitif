export default function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl text-marine mb-4">{title}</h2>
      <div className="space-y-4 text-texte-muted font-sans leading-relaxed text-base">
        {children}
      </div>
    </section>
  );
}
