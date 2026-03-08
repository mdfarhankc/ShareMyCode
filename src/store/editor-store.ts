import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEMES, type Theme } from "@/data/themes";
import { type Padding } from "@/data/paddings";

const SAMPLE_CODE = `function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 10 fibonacci numbers
const results = Array.from({ length: 10 }, (_, i) =>
  fibonacci(i)
);

console.log(results);`;
const SAMPLE_TITLE = "fibonacci.ts";

const DEFAULTS = {
    code: SAMPLE_CODE,
    title: SAMPLE_TITLE,
    theme: THEMES[0],
    padding: 64 as Padding,
    showLineNumbers: true,
};

type EditorState = {
    code: string;
    title: string;
    theme: Theme;
    padding: Padding;
    showLineNumbers: boolean;

    setCode: (code: string) => void;
    setTitle: (title: string) => void;
    setTheme: (theme: Theme) => void;
    setPadding: (padding: Padding) => void;
    setShowLineNumbers: (show: boolean) => void;
    reset: () => void;
};

export const useEditorStore = create<EditorState>()(
    persist(
        (set) => ({
            ...DEFAULTS,

            setCode: (code) => set({ code }),
            setTitle: (title) => set({ title }),
            setTheme: (theme) => set({ theme }),
            setPadding: (padding) => set({ padding }),
            setShowLineNumbers: (showLineNumbers) => set({ showLineNumbers }),
            reset: () => set(DEFAULTS),
        }),
        {
            name: "editor-store",
            partialize: (state) => ({
                code: state.code,
                title: state.title,
                theme: state.theme,
                padding: state.padding,
                showLineNumbers: state.showLineNumbers,
            }),
        },
    ),
);

export const useIsDirty = () =>
    useEditorStore(
        (s) =>
            s.code !== DEFAULTS.code ||
            s.title !== DEFAULTS.title ||
            s.theme.id !== DEFAULTS.theme.id ||
            s.padding !== DEFAULTS.padding ||
            s.showLineNumbers !== DEFAULTS.showLineNumbers,
    );
