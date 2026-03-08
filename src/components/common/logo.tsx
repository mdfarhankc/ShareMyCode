"use client";

import { useEditorStore } from "@/store/editor-store";

export default function Logo() {
  const background = useEditorStore((s) => s.theme.background);

  return (
    <h1 className="text-center font-sans text-xl font-bold tracking-tight">
      <span className="text-muted-foreground">&lt;</span>
      <span className="text-foreground">Share</span>
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: background }}
      >
        My
      </span>
      <span className="text-foreground">Code</span>
      <span className="text-muted-foreground"> /&gt;</span>
    </h1>
  );
}
