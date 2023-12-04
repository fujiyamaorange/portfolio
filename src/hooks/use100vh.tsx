// https://github.com/mvasin/react-div-100vh/blob/master/packages/react-div-100vh/src/index.tsx

import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

export const use100vh = (): number | null => {
  const [height, setHeight] = useState<number | null>(measureHeight);

  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();

  useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce) return;

    const setMeasuredHeight = () => {
      const measuredHeight = measureHeight();
      setHeight(measuredHeight);
    };

    if (!isMobile) {
      window.addEventListener("resize", setMeasuredHeight);
    }

    return () => window.removeEventListener("resize", setMeasuredHeight);
  }, [wasRenderedOnClientAtLeastOnce]);
  return wasRenderedOnClientAtLeastOnce ? height : null;
};

export const measureHeight = (): number | null => {
  if (!isClient()) return null;
  return window.innerHeight;
};

// It's not needed for CSR-only apps, but is critical for SSR.
const useWasRenderedOnClientAtLeastOnce = () => {
  const [wasRenderedOnClientAtLeastOnce, setWasRenderedOnClientAtLeastOnce] =
    useState(false);

  useEffect(() => {
    if (isClient()) {
      setWasRenderedOnClientAtLeastOnce(true);
    }
  }, []);
  return wasRenderedOnClientAtLeastOnce;
};

const isClient = () => {
  return typeof window !== "undefined" && typeof document !== "undefined";
};
