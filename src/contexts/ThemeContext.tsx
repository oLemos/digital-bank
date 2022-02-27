import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import usePersistedState from '../hooks/usePersistedState';

import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeData {
    currentTheme: DefaultTheme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeData>(
    {} as ThemeData,
);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [currentTheme, setCurrentTheme] = usePersistedState<DefaultTheme>(
        'theme',
        lightTheme,
    );

    function toggleTheme() {
        if (currentTheme.title === 'dark') {
            setCurrentTheme(lightTheme);
        } else {
            setCurrentTheme(darkTheme);
        }
    }

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
