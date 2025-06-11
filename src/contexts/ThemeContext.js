import {createContext, useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false); // 상태
    const toggleTheme = () => setIsDarkMode(prev => !prev); // 함수

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}