import { useEffect, useRef, useState } from "react";

const useIntersection = (opciones = {}) => {
    const [State_Boto, setState_Boto] = useState()
    const [State_Ref, setState_Ref] = useState()
    let Reference = useRef()
    useEffect(() => {
        const elemento = Reference.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.isIntersecting? setState_Ref(entry.isIntersecting):""
                setState_Boto(entry.isIntersecting);
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
    return [Reference, State_Boto,State_Ref]
}

export default useIntersection