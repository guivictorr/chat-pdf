"use client";

import { fileAtom } from "@/state/file";
import { useAtomValue } from "jotai";

export function PreviewFile() {
  const file = useAtomValue(fileAtom);

  if (file === null) {
    return <p>No file found</p>;
  }

  const fileUrl = URL.createObjectURL(file);

  return <iframe width="100%" height="100%" src={fileUrl} />;
}
