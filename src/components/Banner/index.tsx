import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { ThemeSwitcher } from "../ThemeSwitcher";

import { Container } from "./styles";

interface BannerProps {
    toggleTheme: () => void;
    theme: string;
}

export function Banner({ toggleTheme, theme }: BannerProps) {
    return (
        <Container>
            <header>
                <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />

                <h1>Um futuro banco lhe espera!</h1>

                <p>Projeto desenvolvido com intuito de aprimorar as habilidades técnicas de desenvolvimento web.</p>
            </header>

            <main>
                <div>
                    <div>
                        <h2>Idealizadores</h2>
                        <ul>
                            <li>
                                <p><FaLinkedin /> LinkedIn:</p>
                                <a target="_blank" href="https://www.linkedin.com/in/olemos/">Gabriel Lemos</a>
                            </li>
                            <li>
                                <p><FaLinkedin /> LinkedIn:</p>
                                <a target="_blank" href="https://www.linkedin.com/in/igor-silva0612/">Igor Silva</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Links Úteis</h2>
                        <ul>
                            <li>
                                <p><FaGithub /> Github:</p>
                                <a target="_blank" href="https://github.com/oLemos/digital-bank">Front-end</a>
                            </li>
                            <li>
                                <p><FaGithub /> Github:</p>
                                <a target="_blank" href="https://github.com/oLemos/back-end">Back-end</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </Container>
    );
}
