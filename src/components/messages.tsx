"use client";

import { useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import { WandSparkles } from "lucide-react";
import { messagesAtom } from "@/state/messages";

export function Messages() {
  const bottomDivRef = useRef<HTMLDivElement>(null);
  const messages = useAtomValue(messagesAtom);

  useEffect(() => {
    bottomDivRef.current?.scrollIntoView();
  }, [messages]);

  if (messages.length <= 0) {
    return (
      <p className="h-full text-xl font-medium flex justify-center items-center">
        No messages found
      </p>
    );
  }

  return (
    <ol className="mt-auto space-y-4 h-fit overflow-y-auto">
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
      <div ref={bottomDivRef} />
    </ol>
  );
}
