"use client";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useEditorStore, useIsDirty } from "@/store/editor-store";
import ThemeToggle from "../theme/theme-toggle";
import LineNumbers from "./line-numbers";
import PaddingSection from "./padding-section";
import ThemeSelection from "./theme-selection";
import ExportActions from "./export-actions";

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div>{children}</div>
    </div>
  );
}

export default function Footer() {
  const reset = useEditorStore((s) => s.reset);
  const isDirty = useIsDirty();

  return (
    <footer className="fixed bottom-0 z-10 w-full border-t border-border bg-card/80 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-5">
      <div className="flex flex-wrap items-start justify-center gap-4 text-sm text-muted-foreground sm:gap-8">
        {/* Theme swatches */}
        <Section label="Theme">
          <ThemeSelection />
        </Section>

        <Separator orientation="vertical" className="hidden sm:block" />

        {/* Padding */}
        <Section label="Padding">
          <PaddingSection />
        </Section>

        <Separator orientation="vertical" className="hidden sm:block" />

        {/* Dark mode */}
        <Section label="Background">
          <ThemeToggle />
        </Section>

        <Separator orientation="vertical" className="hidden sm:block" />

        {/* Line numbers */}
        <Section label="Line #">
          <LineNumbers />
        </Section>

        <Separator orientation="vertical" className="hidden sm:block" />

        {/* Export */}
        <Section label="Export">
          <ExportActions />
        </Section>

        {isDirty && (
          <>
            <Separator orientation="vertical" className="hidden sm:block" />
            <Section label="Reset">
              <Button variant="destructive" onClick={reset}>
                Reset
              </Button>
            </Section>
          </>
        )}
      </div>
    </footer>
  );
}
