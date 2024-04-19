"use client";
import { cn } from "@/lib/utils";
import { fileAtom } from "@/state/file";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useSetAtom } from "jotai";
import { Paperclip } from "lucide-react";
import { DragEvent } from "react";
import { useDropzone } from "react-dropzone";

export function NoFileFound() {
  const setFile = useSetAtom(fileAtom);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function onDragOver(event: DragEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Idk what is happening here
    x.set(event.clientX - 15 - rect.width / 2);
    y.set(event.clientY - 50 - rect.height / 2);
  }

  function onDrop(acceptedFiles: File[]) {
    const file = acceptedFiles[0];
    setFile(file);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDragOver,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      aria-label="Select File (Dropzone)"
      className={cn(
        "text-center h-full w-full flex flex-col items-center justify-center cursor-pointer focus-within:ring-1 ring-ring rounded-md outline-none",
        {
          "ring-1": isDragActive,
        },
      )}
    >
      <AnimatePresence mode="wait">
        {isDragActive && (
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.2,
            }}
            exit={{ opacity: 0, translate: 10 }}
            className="absolute"
            style={{ x, y }}
          >
            <span className="text-2xl">You can drop now... •‿•</span>
          </motion.div>
        )}
        <input {...getInputProps()} />
        <p className="font-bold text-lg">
          {isDragActive ? "Drop here to select the file" : "No file found"}
        </p>
        {!isDragActive && (
          <p className="text-muted-foreground">
            You can select one pdf clicking in this zone
          </p>
        )}
        {!isDragActive && (
          <span className="mt-4 flex items-center">
            <Paperclip className="w-4 h-4 mr-2" />
            Click to select a file
          </span>
        )}
      </AnimatePresence>
    </div>
  );
}
