import { useContext } from 'react';
import { ToggleThemeContext } from '../contexts/ToggleThemeContext';

export function useThemeContext() {
    const context = useContext(ToggleThemeContext);

    return context;
}
