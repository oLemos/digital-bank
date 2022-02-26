interface ThemeSwitcherProps {
    toggleTheme: () => void;
}

export function ThemeSwitcher({ toggleTheme }: ThemeSwitcherProps) {
    return (
        <>
            <h1>Clique neste botão para alterar o tema da aplicação</h1>
            <button type="button" onClick={toggleTheme}>
                Alterar
            </button>
        </>
    );
}
