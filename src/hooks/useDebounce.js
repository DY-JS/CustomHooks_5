import {useCallback, useRef} from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();

    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {       //ф-ция перезаписывается каждый раз пока идёт ввод, 
            clearTimeout(timer.current) //очистка
        }
        timer.current = setTimeout(() => { //а когда нет ввода через время callback выполнится
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
};
