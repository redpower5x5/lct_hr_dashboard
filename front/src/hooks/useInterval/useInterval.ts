import { useEffect, useRef } from 'react';

export function useInterval (
  callback: (...args: any) => any,
  delay: number | undefined
) {
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      intervalRef.current = setInterval(tick, delay);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [delay]);

  return intervalRef;
}
