"use client";

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
      <div className="h-full flex items-center justify-center border rounded-md">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }
  return <div {...rest}>{children}</div>;
}
