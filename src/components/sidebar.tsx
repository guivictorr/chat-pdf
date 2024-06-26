"use client";

import { apiKeyAtom } from "@/state/api-key";
import { PdfFile, filesAtom, selectedFileIdAtom } from "@/state/file";
import { useAtom, useAtomValue } from "jotai";
import { FileIcon, PlusIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { addFile } from "@/services/chat-pdf/add-file";
import { toast } from "sonner";

export function Sidebar() {
  const addFileMutation = useMutation({
    mutationFn: addFile,
  });
  const apiKey = useAtomValue(apiKeyAtom);
  const [files, setFiles] = useAtom(filesAtom);
  const [selectedFileId, setSelectedFileId] = useAtom(selectedFileIdAtom);

  function handleSelectedFile(fileId: string) {
    return () => {
      setSelectedFileId(fileId);
    };
  }

  async function onDrop(acceptedFiles: File[]) {
    if (acceptedFiles.length <= 0) return;
    const selectedFile = acceptedFiles[0];

    const result = await addFileMutation.mutateAsync(selectedFile, {});

    if (result === null) {
      toast("Error! ❌", {
        description: "Add file request failed.",
      });
      return;
    }

    const newFile: PdfFile = {
      id: result.sourceId,
      name: selectedFile.name,
      chat: [],
    };
    setFiles([...files, newFile]);
  }

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    onDrop,
    noDrag: true,
  });

  useEffect(() => {
    if (!selectedFileId && files.length > 0) {
      setSelectedFileId(files[0].id);
    }
  }, [files, selectedFileId, setSelectedFileId]);

  return (
    <Collapsible className="group absolute z-20 left-0 top-0 flex md:relative h-full shrink-0 data-[state='closed']:w-fit w-full max-w-80">
      <CollapsibleContent asChild>
        <ul className="flex flex-col items-start justify-start grow h-full p-3 gap-2 border rounded-md overflow-y-auto bg-background">
          {files.map((file) => (
            <li key={file.id} className="w-full">
              <Button
                onClick={handleSelectedFile(file.id)}
                variant={file.id === selectedFileId ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <FileIcon className="w-4 h-4 shrink-0 mr-2" />
                <span className="truncate">{file.name}</span>
              </Button>
            </li>
          ))}
          <li className="w-full">
            <Button
              disabled={!apiKey || addFileMutation.isPending}
              variant="outline"
              className="w-full"
              {...getRootProps()}
            >
              <input {...getInputProps()} className="hidden" />
              <PlusIcon className="w-4 h-4 text-muted-foreground shrink-0 mr-2" />
            </Button>
          </li>
        </ul>
      </CollapsibleContent>
      <TooltipProvider>
        <Tooltip>
          <CollapsibleTrigger className="group/trigger h-fit my-auto" asChild>
            <TooltipTrigger className="py-8 px-4 group">
              <div className="flex flex-col">
                <div className="transition h-3 w-1 rounded-full bg-muted-foreground group-hover/trigger:bg-white group-data-[state='open']/trigger:group-hover/trigger:rotate-[15deg] group-data-[state='closed']:-rotate-[15deg] translate-y-[.15rem]" />
                <div className="transition h-3 w-1 rounded-full bg-muted-foreground group-hover/trigger:bg-white group-data-[state='open']/trigger:group-hover/trigger:-rotate-[15deg] group-data-[state='closed']:rotate-[15deg] translate-y-[-0.15rem]" />
              </div>
            </TooltipTrigger>
          </CollapsibleTrigger>
          <TooltipContent sideOffset={10} side="right">
            <span className="group-data-[state='open']:block hidden">
              Close sidebar
            </span>
            <span className="group-data-[state='closed']:block hidden">
              Open sidebar
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Collapsible>
  );
}
