"use client";
import { FormEvent, useState } from "react";
import { ExternalLink } from "./external-link";
import { Input } from "./ui/input";
import { apiKeyAtom } from "@/state/api-key";
import { Button } from "./ui/button";
import { Loader2, WandSparkles } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";

function NoApiKey() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setApiKey = useSetAtom(apiKeyAtom);

  async function handleApiKeySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const apiKey = formData.get("api_key");

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 600));

    setApiKey(String(apiKey));
    setIsSubmitting(false);
  }
  return (
    <div className="h-full flex flex-col items-center justify-center px-4">
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
  );
}

const mockMessages = [
  {
    role: "user",
    content: "amet nostrud ea esse id irure commodo ea id id",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
];

export function Chat() {
  const apiKey = useAtomValue(apiKeyAtom);

  if (!apiKey) {
    return <NoApiKey />;
  }

  return (
    <ol className="p-4 flex flex-col justify-end gap-4">
      {mockMessages.map((message) => (
        <li key={message.content} className="flex flex-col gap-4">
          <header className="flex items-center gap-2">
            <span className="font-bold">
              {message.role === "assistant" ? "AI" : "You"}
            </span>
            {message.role === "assistant" && (
              <WandSparkles className="w-4 h-4" />
            )}
            <div className="h-px bg-muted w-full" />
          </header>
          <div>
            Id non dolor consequat ad adipisicing velit nulla qui eiusmod qui.
            Aliqua in commodo velit duis fugiat commodo id dolor proident. Non
            voluptate ullamco laboris consequat irure enim ipsum pariatur irure
            proident amet. Adipisicing nisi et id non in in sit culpa dolore
            pariatur et commodo. Ipsum ullamco veniam deserunt nostrud laboris
            voluptate anim eu esse voluptate do.
          </div>
        </li>
      ))}
    </ol>
  );
}
