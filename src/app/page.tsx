"use client";

import CodePreview from "@/components/code-preview";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background">
      <Header />
      {/* Preview area */}
      <main className="flex flex-1 items-center justify-center overflow-auto px-2 pt-16 pb-40 sm:px-4 sm:pt-20 sm:pb-28">
        <CodePreview />
      </main>
      {/* Controls */}
      <Footer />
    </div>
  );
}
