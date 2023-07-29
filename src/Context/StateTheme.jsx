import React, { useState } from 'react'
import { Themecontext } from './Themecontext'

const StateTheme = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    const data = { theme, changeTheme }
    return (<Themecontext.Provider value={data}>{children}</Themecontext.Provider>)
}

export default StateTheme