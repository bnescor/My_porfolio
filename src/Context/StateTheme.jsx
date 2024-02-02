import React, { useState } from "react";
import { Themecontext } from "./Themecontext";

const StateTheme = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
        }
        return "light";
    });
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
