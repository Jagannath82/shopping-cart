import { createContext, useState } from "react";

import React from 'react'

export const GlobalContext = createContext();
export default function SplashContext({ children }) {
    const [isDark, setIsDark] = useState(false);
    const [search, setSearch] = useState('cat');

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <GlobalContext.Provider value={{ isDark, toggleTheme, search, setSearch }}>
            {children}
        </GlobalContext.Provider>
    )
}
