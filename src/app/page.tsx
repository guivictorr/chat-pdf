import { Chat } from "@/components/chat";
import ChatInput from "@/components/chat-input";
import { PreviewFile } from "@/components/preview-file";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* <header className="flex items-center justify-between px-8 py-4 h-20 border-b"> */}
      {/*   <h1 className="font-bold text-xl">ChatPDF</h1> */}
      {/* </header> */}
      <section className="p-4 h-full flex items-center justify-between gap-4">
        <aside className="hidden md:block overflow-hidden border rounded-md flex-1 h-full">
          <PreviewFile />
        </aside>
        <main className="flex flex-col gap-4 flex-1 h-full">
          <div className="grow border rounded-md">
            <Chat />
          </div>
          <footer className="mt-auto">
            <ChatInput />
          </footer>
        </main>
      </section>
    </div>
  );
}
