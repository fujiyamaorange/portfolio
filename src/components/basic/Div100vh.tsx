import { type HTMLAttributes, forwardRef } from "react";

import { use100vh } from "@/hooks/use100vh";

export const Div100vh = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ style, ...other }, ref) => {
  const height = use100vh();

  const styleWithRealHeight = {
    ...style,
    height: height ? `${height}px` : "100vh",
  };
  return <div ref={ref} style={styleWithRealHeight} {...other} />;
});

Div100vh.displayName = "Div100vh";
