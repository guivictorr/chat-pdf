"use client";
import { apiKeyAtom } from "@/state/api-key";
import { useAtom } from "jotai";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FormEvent } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";

export function ApiKeyInput() {
  const [apiKey, setApiKey] = useAtom(apiKeyAtom);

  function handleApiKey(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newApiKey = formData.get("api_key");

    if (!newApiKey) {
      toast("You need to type something...");
      return;
    }

    setApiKey(newApiKey?.toString());
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleApiKey}>
      <Label htmlFor="api_key">Api key:</Label>
      <Input
        required
        id="api_key"
        name="api_key"
        type="text"
        pattern="^sec_\S+"
        placeholder="Paste your api key here"
        maxLength={40}
        className="font-mono"
        autoComplete="off"
        defaultValue={apiKey ?? ""}
      />
      <Button size="sm">Set</Button>
    </form>
  );
}
