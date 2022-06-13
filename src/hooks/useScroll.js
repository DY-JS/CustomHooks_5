import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        observer.current.observe(childRef.current) //подписка слежки за контрольной областью для пересечения

        return function () {
            observer.current.unobserve(childRef.current) //отписка слежки за областью для пересечения
        };
    }, [callback])
};
//если происходит пересечение заданной области-выполняется callback