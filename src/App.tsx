import { ThemeProvider } from 'styled-components';

import AppRoutes from './routes';

import GlobalStyle from './styles/global';
import { lightTheme } from './styles/themes/light';

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <AppRoutes />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
