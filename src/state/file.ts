import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

export interface PdfFile {
  id: string;
  name: string;
  chat: Message[];
}

export const selectedFileAtom = atom<string>("");

export const filesAtom = atomWithStorage<PdfFile[]>("CHAT_PDF:FILES", [], {
  getItem() {
    return JSON.parse(localStorage.getItem("CHAT_PDF:FILES") ?? "[]") ?? [];
  },
  setItem(_, value) {
    localStorage.setItem("CHAT_PDF:FILES", JSON.stringify(value));
  },
  removeItem() {
    localStorage.removeItem("CHAT_PDF:FILES");
  },
});
