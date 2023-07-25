import { useEffect, useRef, useState } from "react";

const useIntersection = (opciones = {}, depend = false) => {
    const [State, setState] = useState()
    let Reference = useRef()
    useEffect(() => {
        const elemento = Reference.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!depend) {
                    setState(entry.isIntersecting);
                }else{
                    setState(false)
                }
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
    }, [depend])
    return [Reference, State]
}

export default useIntersection