import { useEditorStore } from "@/store/editor-store";
import { Button } from "@/components/ui/button";

export default function LineNumbers() {
  const showLineNumbers = useEditorStore((s) => s.showLineNumbers);
  const setShowLineNumbers = useEditorStore((s) => s.setShowLineNumbers);

  return (
    <Button
      size={"sm"}
      onClick={() => setShowLineNumbers(!showLineNumbers)}
      variant={showLineNumbers ? "enabled" : "disabled"}
    >
      {showLineNumbers ? "On" : "Off"}
    </Button>
  );
}
