import { FiMoon, FiSun } from 'react-icons/fi';
import { useThemeContext } from '../../hooks/useTheme';

import { Button } from './styles';

export function ThemeSwitcher() {
    const { currentTheme, toggleTheme } = useThemeContext();

    return (
        <>
            <Button type="button" onClick={toggleTheme}>
                {currentTheme.title === 'dark' ? <FiMoon size="100" /> : <FiSun size="100" />}
            </Button>
        </>
    );
}
