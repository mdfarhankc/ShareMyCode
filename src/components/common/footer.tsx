"use client";

import { useState } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useEditorStore, useIsDirty } from "@/store/editor-store";
import ThemeToggle from "../theme/theme-toggle";
import LineNumbers from "./line-numbers";
import PaddingSection from "./padding-section";
import ThemeSelection from "./theme-selection";
import ExportActions from "./export-actions";
import LanguageSelector from "./language-selector";

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

function SettingsDrawerContent() {
  const reset = useEditorStore((s) => s.reset);
  const isDirty = useIsDirty();

  return (
    <div className="flex flex-wrap items-start justify-center gap-6 px-6 pb-6 sm:gap-8">
      <Section label="Language">
        <LanguageSelector />
      </Section>

      <Separator orientation="vertical" className="hidden sm:block" />

      <Section label="Theme">
        <ThemeSelection />
      </Section>

      <Separator orientation="vertical" className="hidden sm:block" />

      <Section label="Padding">
        <PaddingSection />
      </Section>

      <Separator orientation="vertical" className="hidden sm:block" />

      <Section label="Background">
        <ThemeToggle />
      </Section>

      <Separator orientation="vertical" className="hidden sm:block" />

      <Section label="Line #">
        <LineNumbers />
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
  );
}

export default function Footer() {
  const [open, setOpen] = useState(false);

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
      </div>
    </footer>
  );
}
