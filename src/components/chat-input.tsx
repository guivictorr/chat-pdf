"use client";

import { CornerDownLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

export default function ChatInput() {
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  function handleTextInputHeight() {
    if (!textInputRef.current) return;
    textInputRef.current.style.height = "";
    textInputRef.current.style.height =
      textInputRef.current.scrollHeight + "px";
    textInputRef.current.scrollTop = textInputRef.current.scrollHeight;
  }
  return (
    <form className="relative flex items-center overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring hover:border-muted-foreground transition">
      <Label htmlFor="message" className="sr-only">
        Message
      </Label>
      <Textarea
        ref={textInputRef}
        id="message"
        placeholder="Type your message here..."
        className="resize-none max-h-[124px] border-0 p-3 shadow-none focus-visible:ring-0 pr-16 text-lg"
        onChange={handleTextInputHeight}
      />
      <div className="absolute h-full right-3 py-2 flex items-end">
        <Button
          type="submit"
          size="sm"
          className="ml-auto gap-1.5"
          aria-label="Send"
        >
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}
