"use client";

import { useRef } from "react";
import { useEditorStore } from "@/store/editor-store";

export default function CodePreview() {
  const { code, theme, padding, showLineNumbers, title, setCode, setTitle } =
    useEditorStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lines = code.split("\n");

  return (
    <div
      data-preview="root"
      className="flex w-full items-center justify-center rounded-xl sm:w-auto"
      style={{
        background: theme.background,
        padding: `clamp(16px, ${padding}px, ${padding}px)`,
      }}
    >
      <div className="w-full max-w-170 overflow-visible rounded-xl bg-card text-card-foreground shadow-2xl sm:min-w-120">
        {/* Title bar */}
        <div className="flex items-center gap-2 rounded-t-xl border-b border-border bg-muted px-4 py-3">
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mx-auto bg-transparent pr-13 text-center text-xs text-muted-foreground outline-none focus:text-foreground"
            spellCheck={false}
          />
        </div>

        {/* Code area */}
        <div className="relative p-5">
          {/* Line numbers layer */}
          {showLineNumbers && (
            <div
              className="pointer-events-none absolute top-5 left-5 select-none text-sm leading-relaxed"
              aria-hidden
            >
              {lines.map((_, i) => (
                <div
                  key={i}
                  className="text-right text-muted-foreground"
                  style={{ width: "1.25rem" }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          )}

          {/* Editable textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full resize-none overflow-hidden bg-transparent font-mono text-sm leading-relaxed text-card-foreground caret-foreground outline-none"
            style={{
              paddingLeft: showLineNumbers ? "2.75rem" : 0,
            }}
            rows={lines.length}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>
      </div>
    </div>
  );
}
