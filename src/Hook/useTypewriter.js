import { useContext, useEffect, useState } from "react";
import { Idiomacontext } from "../Context/Idiomacontext";
const useTypewriter = () => {
    const { auxi } = useContext(Idiomacontext)
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText_in, setDisplayText_in] = useState('');
    const [currentIndex_in, setCurrentIndex_in] = useState(0);
    const [result, setResult] = useState()
    const text_1 = "Desarrollador junior con sólidos conocimientos en HTML, CSS, JavaScript y React, mi enfoque es crear experiencias digitales intuitivas y atractivas, combinando estética con funcionalidad. Siempre estoy buscando aprender y mejorar para ofrecer soluciones web eficientes y de alta calidad."
    const tex_2 = "Junior developer with solid knowledge in HTML, CSS, JavaScript and React, my focus is to create intuitive and engaging digital experiences, combining aesthetics with functionality. I am always looking to learn and improve to deliver efficient and high quality web solutions."
    useEffect(() => {
        const interval = setInterval(() => {
            if (auxi) {
                setResult(displayText_in)
            } else {
                setResult(displayText)
            }
            if (currentIndex_in < tex_2.length) {
                setDisplayText_in(() => displayText_in + tex_2[currentIndex_in]);
                setCurrentIndex_in(() => currentIndex_in + 1);
            } else {
                clearInterval(interval);
            }
            if (currentIndex < text_1.length) {
                setDisplayText(() => displayText + text_1[currentIndex]);
                setCurrentIndex(() => currentIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [currentIndex,currentIndex_in,auxi]);

    return result
}

export default useTypewriter