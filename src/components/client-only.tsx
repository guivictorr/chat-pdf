"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { HTMLAttributes } from "react";
import { PropsWithChildren } from "react";

export function ClientOnly({
  children,
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return (
      <div
        className={cn(
          "h-full flex items-center justify-center border rounded-md",
          rest.className,
        )}
      >
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }
  return <div>{children}</div>;
}
