"use client";

import { CornerDownLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent, KeyboardEvent, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { selectedFileIdAtom } from "@/state/file";
import { messagesAtom } from "@/state/messages";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/services/chat-pdf/send-message";
import { toast } from "sonner";

function handleMessage(event: ChangeEvent<HTMLTextAreaElement>) {
  const target = event.currentTarget;
  target.style.height = "";
  target.style.height = target.scrollHeight + "px";
  target.scrollTop = target.scrollHeight;
}

export default function ChatInput() {
  const sendMessageMutation = useMutation({ mutationFn: sendMessage });
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const setMessage = useSetAtom(messagesAtom);
  const selectedFileId = useAtomValue(selectedFileIdAtom);

  async function handleSendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message");

    if (!message || !selectedFileId) {
      return;
    }

    setMessage(message.toString(), "user");
    if (textAreaRef.current) {
      textAreaRef.current.value = "";
      textAreaRef.current.style.height = "";
      textAreaRef.current.focus();
    }

    const result = await sendMessageMutation.mutateAsync({
      sourceId: selectedFileId,
      messages: [{ content: message.toString(), role: "user" }],
    });

    if (result === null) {
      toast("Error! ❌", {
        description: "Send message request failed.",
      });
      return;
    }

    setMessage(result.content, "assistant");
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
        onKeyDown={handleEnterPress}
        onChange={handleMessage}
        disabled={!selectedFileId || sendMessageMutation.isPending}
      />
      <div className="absolute h-full right-3 py-2 flex items-end">
        <Button
          type="submit"
          size="sm"
          className="ml-auto gap-1.5"
          aria-label="Send"
          disabled={!selectedFileId || sendMessageMutation.isPending}
        >
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}
