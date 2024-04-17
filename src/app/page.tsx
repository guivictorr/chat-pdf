import { Chat } from "@/components/chat";
import ChatInput from "@/components/chat-input";
import { PreviewFile } from "@/components/preview-file";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ExternalLinkIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between px-8 py-4 h-20 border-b">
        <h1 className="font-bold text-xl">ChatPDF</h1>
        <div>
          <TooltipProvider>
            <Tooltip delayDuration={300}>
              <TooltipTrigger className="flex items-center gap-2">
                <Input type="text" placeholder="API Key" />
                <Button>Set</Button>
              </TooltipTrigger>
              <TooltipContent>
                You need to create a developer account on <br />
                <a
                  className="underline underline-offset-2"
                  href="https://www.chatpdf.com/docs/api/backend"
                  target="_blank"
                >
                  <span>ChatPDF</span>
                  <ExternalLinkIcon className="w-3 h-3 underline ml-0.5 inline-block mb-0.5" />
                </a>{" "}
                and get your API Key.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>
      <section className="p-4 h-full flex items-center justify-between gap-4">
        <aside className="hidden md:block overflow-hidden border rounded-md flex-1 h-full">
          <PreviewFile />
        </aside>
        <main className="flex flex-col gap-2 flex-1 h-full">
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
