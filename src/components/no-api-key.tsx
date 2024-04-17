"use client";
import { FormEvent, useState } from "react";
import { ExternalLink } from "./external-link";
import { Input } from "./ui/input";
import { useSetAtom } from "jotai";
import { apiKeyAtom } from "@/state/api-key";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function NoApiKey() {
  const [isLoading, setIsLoading] = useState(false);
  const setApiKey = useSetAtom(apiKeyAtom);

  async function handleApiKeySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const apiKey = formData.get("api_key");

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 600));

    setApiKey(String(apiKey));
    setIsLoading(false);
  }

  return (
    <div className="px-4">
      <div className="text-center">
        <p className="font-bold text-lg">No API Key found</p>
        <p className="text-muted-foreground max-w-sm mb-8">
          You need to create an account on{" "}
          <ExternalLink href="https://chatpdf.com/docs/api/backend">
            ChatPDF
          </ExternalLink>{" "}
          and use the api key given by the free account.
        </p>
      </div>
      <form onSubmit={handleApiKeySubmit}>
        <div className="flex items-center gap-2">
          <Input
            required
            name="api_key"
            type="text"
            pattern="^sec_\S+"
            placeholder="Paste your api key here"
            maxLength={40}
            className="font-mono"
            autoComplete="off"
          />
          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="h-4 w-6 animate-spin" />}
            {!isLoading && <p>Set</p>}
          </Button>
        </div>
        <span className="text-xs text-muted-foreground text-start">
          e.g: sec_9pHlrJRdPMVCmFBh4ZyDJAlTNoqKwRwQ
        </span>
      </form>
    </div>
  );
}
