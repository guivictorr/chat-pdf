import ChatInput from "@/components/chat-input";
import { Messages } from "@/components/messages";

export function Chat() {
  return (
    <main className="flex flex-col gap-8 h-full w-full">
      <Messages />
      <footer>
        <ChatInput />
      </footer>
    </main>
  );
}
