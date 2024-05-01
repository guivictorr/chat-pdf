"use client";

import { messagesAtom } from "@/state/messages";
import { useAtomValue } from "jotai";
import { WandSparkles } from "lucide-react";

export function Messages() {
  const messages = useAtomValue(messagesAtom);

  if (messages.length <= 0) {
    return (
      <p className="h-full text-xl font-medium flex justify-center items-center">
        No messages found
      </p>
    );
  }

  return (
    <ol className="flex flex-col justify-end space-y-4 overflow-y-auto pb-8 flex-1">
      {messages.map((message) => (
        <li key={message.id} className="space-y-4">
          <header className="flex items-center gap-2">
            <span className="font-bold">
              {message.role === "assistant" ? "AI" : "You"}
            </span>
            {message.role === "assistant" && (
              <WandSparkles className="w-4 h-4" />
            )}
            <div className="h-px bg-muted w-full" />
          </header>
          <p className="whitespace-normal" style={{ wordBreak: "break-all" }}>
            {message.content}
          </p>
        </li>
      ))}
    </ol>
  );
}
