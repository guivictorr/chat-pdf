"use client";

import { fileAtom } from "@/state/file";
import { useAtomValue } from "jotai";
import { NoFileFound } from "./no-file-found";

export function PreviewFile() {
  const file = useAtomValue(fileAtom);

  if (file === null) {
    return (
      <div className="h-full flex items-center justify-center">
        <NoFileFound />
      </div>
    );
  }

  const fileUrl = URL.createObjectURL(file);

  return <iframe width="100%" height="100%" src={fileUrl} />;
}
