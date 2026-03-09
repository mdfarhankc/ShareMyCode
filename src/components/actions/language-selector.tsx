"use client";

import { LANGUAGES } from "@/data/languages";
import { useEditorStore } from "@/store/editor-store";

export default function LanguageSelector() {
  const language = useEditorStore((s) => s.language);
  const setLanguage = useEditorStore((s) => s.setLanguage);

  return (
    <select
      value={language.id}
      onChange={(e) => {
        const lang = LANGUAGES.find((l) => l.id === e.target.value);
        if (lang) setLanguage(lang);
      }}
      className="rounded bg-accent px-3 py-1 text-xs text-accent-foreground outline-none"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
