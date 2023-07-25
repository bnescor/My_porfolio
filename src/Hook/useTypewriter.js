import { useEffect, useState } from "react";

const useTypewriter = (text) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText(() => displayText + text[currentIndex]);
                setCurrentIndex(() => currentIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [currentIndex, text]);

    return displayText
}

export default useTypewriter