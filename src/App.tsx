import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
    const [theme, setTheme] = useState(darkTheme);

    function toggleTheme() {
        if (theme.title === 'dark') {
            setTheme(lightTheme);
        } else {
            setTheme(darkTheme);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ThemeSwitcher toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

export default App;
