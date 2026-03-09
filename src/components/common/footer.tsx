"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEditorStore, useIsDirty } from "@/store/editor-store";
import ThemeToggle from "@/components/theme/theme-toggle";
import LineNumbers from "@/components/actions/line-numbers";
import PaddingSection from "@/components/actions/padding-section";
import ThemeSelection from "@/components/actions/theme-selection";
import ExportActions from "@/components/actions/export-actions";
import LanguageSelector from "@/components/actions/language-selector";

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="shrink-0 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div>{children}</div>
    </div>
  );
}

function SettingsDrawerContent() {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <Section label="Language">
        <LanguageSelector />
      </Section>

      <Separator />

      <Section label="Theme">
        <ThemeSelection />
      </Section>

      <Separator />

      <Section label="Padding">
        <PaddingSection />
      </Section>

      <Separator />

      <Section label="Background">
        <ThemeToggle />
      </Section>

      <Separator />

      <Section label="Line #">
        <LineNumbers />
      </Section>
    </div>
  );
}

export default function Footer() {
  const [open, setOpen] = useState(false);
  const reset = useEditorStore((s) => s.reset);
  const isDirty = useIsDirty();

  return (
    <footer className="fixed bottom-0 z-10 w-full border-t border-border bg-card/80 px-4 py-3 backdrop-blur-sm sm:px-6">
      <div className="flex items-center justify-center gap-4">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Settings</DrawerTitle>
            </DrawerHeader>
            <SettingsDrawerContent />
          </DrawerContent>
        </Drawer>

        <Separator orientation="vertical" />

        <ExportActions />

        {isDirty && (
          <>
            <Separator orientation="vertical" />
            <Button variant="destructive" size="sm" onClick={reset}>
              Reset
            </Button>
          </>
        )}
      </div>
    </footer>
  );
}
