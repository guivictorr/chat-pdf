import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

export interface PdfFile {
  id: string;
  name: string;
  chat: Message[];
}

export const selectedFileIdAtom = atom<string>("");
export const filesAtom = atomWithStorage<PdfFile[]>("CHAT_PDF:FILES", []);
