"use client";

import { useRef } from "react";
import { useTheme } from "next-themes";
import { useEditorStore } from "@/store/editor-store";
import { useShiki } from "@/hooks/use-shiki";

const codeStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "14px",
  lineHeight: "1.625",
  tabSize: 2,
} as const;

export default function CodePreview() {
  const {
    code,
    theme,
    padding,
    showLineNumbers,
    title,
    language,
    setCode,
    setTitle,
  } = useEditorStore();
  const { resolvedTheme } = useTheme();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lines = code.split("\n");
  const isDark = resolvedTheme === "dark";

  const highlightedHtml = useShiki(code, language.id, isDark);

  const lineNumberWidth = "1.25rem";
  const lineNumberGap = "1.5rem";

  return (
    <div
      data-preview="root"
      className="flex w-full items-center justify-center rounded-xl sm:w-auto"
      style={{
        background: theme.background,
        padding: `clamp(16px, ${padding}px, ${padding}px)`,
      }}
    >
      <div className="w-full max-w-[90vw] overflow-visible rounded-xl bg-card text-card-foreground shadow-2xl sm:min-w-120">
        {/* Title bar */}
        <div className="flex items-center gap-2 rounded-t-xl border-b border-border bg-muted px-4 py-3">
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-red-500/80" />
            <span className="size-3 rounded-full bg-yellow-500/80" />
            <span className="size-3 rounded-full bg-green-500/80" />
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
        <div className="flex p-5">
          {/* Line numbers */}
          {showLineNumbers && (
            <div
              className="shrink-0 select-none text-right text-muted-foreground"
              style={{
                ...codeStyle,
                width: lineNumberWidth,
                marginRight: lineNumberGap,
              }}
              aria-hidden
            >
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}

          {/* Code content */}
          <div className="relative min-w-0 flex-1">
            {/* Syntax highlighted layer */}
            <div
              className="pointer-events-none [&_*]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0"
              style={codeStyle}
              aria-hidden
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />

            {/* Editable textarea */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="absolute inset-0 resize-none overflow-hidden bg-transparent text-transparent caret-foreground outline-none"
              style={{
                ...codeStyle,
                width: "100%",
                height: "100%",
              }}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
