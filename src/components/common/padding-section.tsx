import { PADDINGS } from "@/data/paddings";
import { useEditorStore } from "@/store/editor-store";
import { Button } from "../ui/button";

export default function PaddingSection() {
  const padding = useEditorStore((s) => s.padding);
  const setPadding = useEditorStore((s) => s.setPadding);
  return (
    <div className="flex gap-1">
      {PADDINGS.map((p) => (
        <Button
          key={p}
          onClick={() => setPadding(p)}
          variant={padding === p ? "enabled" : "disabled"}
        >
          {p}
        </Button>
      ))}
    </div>
  );
}
