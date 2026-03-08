"use client";

import { useCallback, useState } from "react";
import { toPng } from "html-to-image";
import { useEditorStore } from "@/store/editor-store";
import { Button } from "../ui/button";

function getPreviewNode() {
  return document.querySelector<HTMLElement>('[data-preview="root"]');
}

export default function ExportActions() {
  const title = useEditorStore((s) => s.title);
  const code = useEditorStore((s) => s.code);
  const [codeCopied, setCodeCopied] = useState(false);
  const [imageCopied, setImageCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleCopyCode = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  }, [code]);

  const handleSaveImage = useCallback(async () => {
    const node = getPreviewNode();
    if (!node) return;

    setSaving(true);
    try {
      const dataUrl = await toPng(node, { pixelRatio: 2, skipFonts: true });
      const link = document.createElement("a");
      const name = title.replace(/\.[^.]+$/, "") || "sharemycode";
      link.download = `${name}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setSaving(false);
    }
  }, [title]);

  const handleCopyImage = useCallback(async () => {
    const node = getPreviewNode();
    if (!node) return;

    const dataUrl = await toPng(node, { pixelRatio: 2, skipFonts: true });
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    setImageCopied(true);
    setTimeout(() => setImageCopied(false), 2000);
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="enabled" onClick={handleCopyCode}>
        {codeCopied ? "Copied!" : "Copy Code"}
      </Button>
      <Button variant="enabled" onClick={handleCopyImage}>
        {imageCopied ? "Copied!" : "Copy Image"}
      </Button>
      <Button variant="default" onClick={handleSaveImage} disabled={saving}>
        {saving ? "Saving..." : "Save PNG"}
      </Button>
    </div>
  );
}
