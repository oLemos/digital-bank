import { createContext, ReactNode, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import usePersistedState from '../hooks/usePersistedState';

import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';

interface ToggleThemeProviderProps {
    children: ReactNode;
}

interface ToggleThemeData {
    currentTheme: DefaultTheme;
    toggleTheme: () => void;
}

export const ToggleThemeContext = createContext<ToggleThemeData>({} as ToggleThemeData);

export function ToggleThemeProvider({ children }: ToggleThemeProviderProps) {
    const [currentTheme, setCurrentTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

    function toggleTheme() {
        if (currentTheme.title === 'dark') {
            setCurrentTheme(lightTheme)
        } else {
            setCurrentTheme(darkTheme)
        }
    }

    return (
        <ToggleThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ToggleThemeContext.Provider>
    );
}
