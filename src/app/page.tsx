import ChatInput from "@/components/chat-input";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center px-8 py-4 h-20 border-b">
        <h1 className="font-bold text-xl">ChatPDF</h1>
      </header>
      <section className="p-4 h-full flex items-center justify-between gap-4">
        <aside className="hidden md:block border rounded-md flex-1 h-full">
          pdf preview
        </aside>
        <main className="flex flex-col gap-2 flex-1 h-full">
          <div className="grow border rounded-md">chat</div>
          <footer className="mt-auto">
            <ChatInput />
          </footer>
        </main>
      </section>
    </div>
  );
}
