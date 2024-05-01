import { Sidebar } from "@/components/sidebar";
import { Chat } from "../components/chat";
import { ApiKeyInput } from "@/components/api-key-input";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between gap-4 px-8 py-4 h-[8%] border-b">
        <h1 className="font-bold text-xl shrink">ChatPDF</h1>
        <ApiKeyInput />
      </header>
      <section className="py-4 pr-4 pl-9 md:pl-4 h-[92%] flex items-center justify-between">
        <Sidebar />
        {/* <PreviewFile /> */}
        <Chat />
      </section>
    </div>
  );
}
