import { ThemeProvider } from 'styled-components';
import { ToggleThemeProvider } from './contexts/ToggleThemeContext';
import { useThemeContext } from './hooks/ThemeHook';

import AppRoutes from './routes';

import GlobalStyle from './styles/global';

const Application = () => {
    const { currentTheme } = useThemeContext();

    return (
        <ThemeProvider theme={currentTheme}>
            <AppRoutes />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default function App() {
    return (
        <ToggleThemeProvider>
            <Application />
        </ToggleThemeProvider>
    );
}
