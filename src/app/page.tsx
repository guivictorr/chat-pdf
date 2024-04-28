import { Chat } from "@/components/chat";
import ChatInput from "@/components/chat-input";
import { ClientOnly } from "@/components/client-only";
import { NoApiKey } from "@/components/no-api-key";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between px-8 py-4 h-20 border-b">
        <h1 className="font-bold text-xl">ChatPDF</h1>
      </header>
      <ClientOnly className="absolute h-full w-full z-20">
        <NoApiKey />
      </ClientOnly>
      <section className="py-4 pr-4 h-full flex items-center justify-between">
        <Sidebar />
        <div className="flex items-center h-full grow gap-4">
          {/* <PreviewFile /> */}
          <main className="flex flex-col gap-4 flex-1 h-full">
            <Chat />
            <footer className="mt-auto">
              <ChatInput />
            </footer>
          </main>
        </div>
      </section>
    </div>
  );
}
