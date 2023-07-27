import { useEffect, useRef, useState } from "react";

const useIntersection = (opciones = {}) => {
    const [State, setState] = useState()
    let Reference = useRef()
    useEffect(() => {
        const elemento = Reference.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setState(entry.isIntersecting);
            });
        }, opciones);

        if (elemento) {
            observer.observe(elemento);
        }
        return () => {
            if (elemento) {
                observer.unobserve(elemento);
            }
        }
    }, [])
    return [Reference, State]
}

export default useIntersection