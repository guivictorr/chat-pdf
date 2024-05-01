"use client";

import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  return (
    <JotaiProvider>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </JotaiProvider>
  );
}
