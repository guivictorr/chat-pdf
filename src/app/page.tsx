import { Sidebar } from "@/components/sidebar";
import { Chat } from "../components/chat";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* <header className="flex items-center justify-between px-8 py-4 h-20 border-b"> */}
      {/*   <h1 className="font-bold text-xl">ChatPDF</h1> */}
      {/* </header> */}
      <section className="py-4 pr-4 h-full flex items-center justify-between">
        <Sidebar />
        {/* <PreviewFile /> */}
        <Chat />
      </section>
    </div>
  );
}
