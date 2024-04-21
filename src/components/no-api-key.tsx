"use client";

import { apiKeyAtom } from "@/state/api-key";
import { useAtom } from "jotai";
import { Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "./external-link";

export function NoApiKey() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiKey, setApiKey] = useAtom(apiKeyAtom);

  async function handleApiKeySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const apiKey = formData.get("api_key");

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 600));

    setApiKey(String(apiKey));
    setIsSubmitting(false);
  }

  if (apiKey) {
    return;
  }

  return (
    <div className="fixed h-full w-full z-20 backdrop-blur flex flex-col items-center justify-center px-4">
      <div className="border p-8 rounded-lg bg-background">
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
        <form className="w-full max-w-sm" onSubmit={handleApiKeySubmit}>
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
            <Button disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="h-4 w-6 animate-spin" />}
              {!isSubmitting && <p>Set</p>}
            </Button>
          </div>
          <span className="text-xs text-muted-foreground text-start">
            e.g: sec_9pHlrJRdPMVCmFBh4ZyDJAlTNoqKwRwQ
          </span>
        </form>
      </div>
    </div>
  );
}
