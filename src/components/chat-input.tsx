"use client";

import { CornerDownLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent, KeyboardEvent, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { selectedFileIdAtom } from "@/state/file";
import { messagesAtom } from "@/state/messages";

export default function ChatInput() {
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const setMessage = useSetAtom(messagesAtom);
  const selectedFileId = useAtomValue(selectedFileIdAtom);

  function handleMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    const target = event.currentTarget;
    target.style.height = "";
    target.style.height = target.scrollHeight + "px";
    target.scrollTop = target.scrollHeight;
  }

  function handleSendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message");

    if (!message || !selectedFileId) {
      return;
    }

    setMessage(message.toString());
    event.currentTarget.reset();
    event.currentTarget.focus();

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "";
    }
  }

  function handleEnterPress(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || !formRef.current) return;
    event.preventDefault();
    formRef.current.requestSubmit();
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSendMessage}
      className="relative flex items-center overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring hover:border-muted-foreground"
    >
      <Label htmlFor="message" className="sr-only">
        Message
      </Label>
      <Textarea
        ref={textAreaRef}
        id="message"
        name="message"
        placeholder="Type your message here..."
        className="resize-none max-h-[124px] border-0 p-3 shadow-none focus-visible:ring-0 pr-16 text-lg"
        rows={1}
        wrap="hard"
        onKeyDown={handleEnterPress}
        onChange={handleMessage}
        disabled={!selectedFileId}
      />
      <div className="absolute h-full right-3 py-2 flex items-end">
        <Button
          type="submit"
          size="sm"
          className="ml-auto gap-1.5"
          aria-label="Send"
          disabled={!selectedFileId}
        >
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}
