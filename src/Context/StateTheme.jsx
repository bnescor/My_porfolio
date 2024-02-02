import React, { useEffect, useState } from "react";
import { Themecontext } from "./Themecontext";

const StateTheme = ({ children }) => {
    const [theme, setTheme] = useState();
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }

    }, [])

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    const data = { theme, changeTheme };
    return <Themecontext.Provider value={data}>{children}</Themecontext.Provider>;
};

export default StateTheme;
