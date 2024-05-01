import { Message } from "@/state/messages";
import { chatPdf } from ".";
import { AxiosRequestConfig } from "axios";

interface SendMessageResponse {
  content: string;
  references: { pageNumber: number }[];
}

interface SendMessageRequest {
  stream?: boolean;
  referenceSources?: boolean;
  sourceId: string;
  messages: Omit<Message, "id">[];
}

export async function sendMessage(
  props: SendMessageRequest,
): Promise<SendMessageResponse | null> {
  const apiKey = localStorage.getItem("CHAT_PDF:API_KEY")?.replace(/"/gi, "");

  const options: AxiosRequestConfig = {
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await chatPdf.post<SendMessageResponse>(
      "/chats/message",
      props,
      options,
    );

    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
