import { useEffect, useState } from "react";
import { type Highlighter, createHighlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: ["github-dark", "github-light"],
            langs: [
                "typescript", "javascript", "python", "rust", "go", "java",
                "c", "cpp", "csharp", "php", "ruby", "swift", "kotlin",
                "html", "css", "json", "yaml", "sql", "bash", "markdown",
                "docker", "jsx", "tsx",
            ],
        });
    }
    return highlighterPromise;
}

export function useShiki(code: string, language: string, isDark: boolean) {
    const [html, setHtml] = useState("");

    useEffect(() => {
        let cancelled = false;

        getHighlighter().then((highlighter) => {
            if (cancelled) return;

            const result = highlighter.codeToHtml(code, {
                lang: language,
                theme: isDark ? "github-dark" : "github-light",
            });

            setHtml(result);
        });

        return () => {
            cancelled = true;
        };
    }, [code, language, isDark]);

    return html;
}
