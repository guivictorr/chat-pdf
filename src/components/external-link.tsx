import { ExternalLinkIcon } from "lucide-react";
import { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ children, href }: ExternalLinkProps) {
  return (
    <a
      className="text-foreground underline underline-offset-2"
      href={href}
      target="_blank"
    >
      <span>{children}</span>
      <ExternalLinkIcon className="w-3 h-3 underline ml-0.5 inline-block mb-0.5" />
    </a>
  );
}
