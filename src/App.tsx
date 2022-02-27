import { ThemeProvider } from 'styled-components';
import { ThemeProvider as AppThemeProvider } from './contexts/ThemeContext';
import { useThemeContext } from './hooks/useTheme';

import AppRoutes from './routes';

import GlobalStyle from './styles/global';

function Application() {
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
        <AppThemeProvider>
            <Application />
        </AppThemeProvider>
    );
}
