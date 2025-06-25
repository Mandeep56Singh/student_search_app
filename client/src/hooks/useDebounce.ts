import { useEffect, useState } from "react";

export const useDebounce = <T>(val: T, delay: number): T => {
  const [debounced, setDebounced] = useState(val);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(val);
    }, delay);

    return () => clearTimeout(timerId);
  }, [val, delay]);

  return debounced;
};
