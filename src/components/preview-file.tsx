"use client";

import { fileAtom } from "@/state/file";
import { useAtomValue } from "jotai";
import { NoFileFound } from "./no-file-found";

export function PreviewFile() {
  const file = useAtomValue(fileAtom);

  if (file === null) {
    return (
      <aside className="hidden md:block border rounded-md flex-1 h-full hover:border-muted-foreground transition">
        <NoFileFound />
      </aside>
    );
  }

  const fileUrl = URL.createObjectURL(file);

  return (
    <aside className="hidden md:block overflow-hidden border rounded-md flex-1 h-full hover:border-muted-foreground transition">
      <iframe width="100%" height="100%" src={fileUrl} />
    </aside>
  );
}
