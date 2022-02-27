import { FiMoon, FiSun } from 'react-icons/fi';

import { Button } from './styles';

interface ThemeSwitcherProps {
    toggleTheme?: () => void;
    theme?: string;
}

export function ThemeSwitcher({ toggleTheme, theme }: ThemeSwitcherProps) {
    return (
        <>
            <Button type="button" onClick={toggleTheme}>
                {theme === 'dark' ? <FiMoon size="100" /> : <FiSun size="100" />}
            </Button>
        </>
    );
}
