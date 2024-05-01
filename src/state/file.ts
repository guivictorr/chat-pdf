import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Message } from "./messages";

export interface PdfFile {
  id: string;
  name: string;
  chat: Message[];
}

export const selectedFileIdAtom = atom<string>("");
export const filesAtom = atomWithStorage<PdfFile[]>("CHAT_PDF:FILES", []);
