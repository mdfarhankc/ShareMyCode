import { PADDINGS } from "@/data/paddings";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/editor-store";
import { Button } from "@/components/ui/button";

export default function PaddingSection() {
  const padding = useEditorStore((s) => s.padding);
  const setPadding = useEditorStore((s) => s.setPadding);
  return (
    <div className="flex gap-1">
      {PADDINGS.map((p, i) => (
        <Button
          size={"sm"}
          key={p}
          onClick={() => setPadding(p)}
          variant={padding === p ? "enabled" : "disabled"}
          className={cn(i >= 4 && "hidden sm:inline-flex")}
        >
          {p}
        </Button>
      ))}
    </div>
  );
}
