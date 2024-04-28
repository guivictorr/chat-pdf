import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import { ClientOnly } from "@/components/client-only";
import { NoApiKey } from "@/components/no-api-key";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Providers>
          <ClientOnly className="absolute h-full w-full z-20">
            <NoApiKey />
          </ClientOnly>
          {children}
        </Providers>
      </body>
    </html>
  );
}
