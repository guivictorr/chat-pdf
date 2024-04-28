import ChatInput from "@/components/chat-input";
import { Messages } from "@/components/messages";

export function Chat() {
  return (
    <main className="flex flex-col gap-4 flex-1 h-full">
      <Messages />
      <footer className="mt-auto">
        <ChatInput />
      </footer>
    </main>
  );
}
