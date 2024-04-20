import { Chat } from "@/components/chat";
import ChatInput from "@/components/chat-input";
import { ClientOnly } from "@/components/client-only";
import { PreviewFile } from "@/components/preview-file";
import { FileIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* <header className="flex items-center justify-between px-8 py-4 h-20 border-b"> */}
      {/*   <h1 className="font-bold text-xl">ChatPDF</h1> */}
      {/* </header> */}
      <section className="p-4 h-full flex items-center justify-between gap-4">
        <ul className="flex flex-col items-start justify-start h-full p-3 gap-2 border hover:border-muted-foreground transition rounded-md overflow-y-auto w-1/6">
          {Array.from({ length: 10 }, (_, i) => (
            <li className="flex items-center gap-2 w-full p-2 hover:bg-muted cursor-pointer rounded-md">
              <FileIcon className="w-4 h-4" />
              PDF{i}
            </li>
          ))}
        </ul>
        <PreviewFile />
        <main className="flex flex-col gap-4 flex-1 h-full">
          <ClientOnly className="grow border rounded-md overflow-y-auto">
            <Chat />
          </ClientOnly>
          <footer className="mt-auto">
            <ChatInput />
          </footer>
        </main>
      </section>
    </div>
  );
}
