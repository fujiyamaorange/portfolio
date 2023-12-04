import { useRef, useEffect } from "react";

export const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn);

  fnRef.current = fn;

  useEffect(() => {
    return () => fnRef.current();
  }, []);
};
