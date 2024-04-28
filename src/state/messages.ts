import { atom } from "jotai";
import { selectedFileIdAtom, filesAtom, Message } from "./file";

export const messagesAtom = atom(
  (get) => {
    const selectedFileId = get(selectedFileIdAtom);
    const files = get(filesAtom);
    return files
      .filter((file) => file.id === selectedFileId)
      .map((file) => file.chat)
      .flat();
  },
  (get, set, content: string) => {
    const selectedFileId = get(selectedFileIdAtom);
    const files = get(filesAtom);

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
    };
    const newFiles = files.map((file) => {
      if (file.id !== selectedFileId) return file;

      return {
        ...file,
        chat: [...file.chat, newMessage],
      };
    });

    set(filesAtom, newFiles);
  },
);
