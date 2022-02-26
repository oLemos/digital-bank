import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';
import { Banner } from './components/Banner';

function App() {
    const [theme, setTheme] = useState(lightTheme);

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
            <Banner toggleTheme={toggleTheme} theme={theme.title} />
        </ThemeProvider>
    );
}

export default App;
