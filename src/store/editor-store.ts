import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEMES, type Theme } from "@/data/themes";
import { SAMPLE_CODE, SAMPLE_TITLE } from "@/data/code";
import { type Padding } from "@/data/paddings";
import { LANGUAGES, type Language } from "@/data/languages";



const DEFAULTS = {
    code: SAMPLE_CODE,
    title: SAMPLE_TITLE,
    theme: THEMES[0],
    padding: 64 as Padding,
    showLineNumbers: true,
    language: LANGUAGES[0],
};

type EditorState = {
    code: string;
    title: string;
    theme: Theme;
    padding: Padding;
    showLineNumbers: boolean;
    language: Language;

    setCode: (code: string) => void;
    setTitle: (title: string) => void;
    setTheme: (theme: Theme) => void;
    setPadding: (padding: Padding) => void;
    setShowLineNumbers: (show: boolean) => void;
    setLanguage: (language: Language) => void;
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
            setLanguage: (language) =>
                set((state) => {
                    const baseName = state.title.replace(/\.[^.]+$/, "") || "untitled";
                    return { language, title: `${baseName}.${language.extension}` };
                }),
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
                language: state.language,
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
            s.showLineNumbers !== DEFAULTS.showLineNumbers ||
            s.language.id !== DEFAULTS.language.id,
    );
