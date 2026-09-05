"use client";

import dynamic from "next/dynamic";
import SiteBackground from "@/components/SiteBackground";

const CharteExperience = dynamic(
  () => import("@/components/charte/CharteExperience"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-30 flex items-center justify-center">
        <SiteBackground className="absolute inset-0" />
        <p className="relative text-or/50 text-xs tracking-[0.3em] uppercase font-sans">
          Chargement…
        </p>
      </div>
    ),
  }
);

export default function ChartePageClient() {
  return <CharteExperience />;
}
