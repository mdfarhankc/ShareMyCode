import { THEMES } from "@/data/themes";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/editor-store";

export default function ThemeSelection() {
  const selectedTheme = useEditorStore((s) => s.theme);
  const setTheme = useEditorStore((s) => s.setTheme);
  return (
    <div className="flex gap-1.5">
      {THEMES.map((theme) => (
        <button
          key={theme.id}
          title={theme.name}
          onClick={() => setTheme(theme)}
          className={cn(
            "size-6 rounded-full border-2 transition-transform hover:scale-110",
            selectedTheme.id === theme.id
              ? "border-primary scale-110"
              : "border-transparent",
          )}
          style={{ background: theme.background }}
        />
      ))}
    </div>
  );
}
