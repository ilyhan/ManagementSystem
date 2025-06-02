import { useCallback, useRef } from "react";

export function useDebounce(callback: (val: string) => void, delay: number) {
    const timer = useRef<number | null>(null);

    const debounceCallback = useCallback((val: string) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = window.setTimeout(() => {
            callback(val)
        }, delay)
    }, [callback, delay]);

    return debounceCallback;
};