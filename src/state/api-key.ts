import { atomWithStorage } from "jotai/utils";

export const apiKeyAtom = atomWithStorage<string | null>(
  "CHAT_PDF:API_KEY",
  null,
);
