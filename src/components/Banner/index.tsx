import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ThemeSwitcher } from '../ThemeSwitcher';

import { Container } from './styles';

export function Banner() {
    return (
        <Container>
            <header>
                <ThemeSwitcher />

                <Link to="login">
                    <h1>Um futuro banco lhe espera!</h1>
                </Link>

                <p>
                    Projeto desenvolvido com intuito de aprimorar
                    as habilidades técnicas de desenvolvimento web.

                </p>
            </header>

            <main>
                <div>
                    <div>
                        <h2>Idealizadores</h2>
                        <ul>
                            <li>
                                <p>
                                    <FaLinkedin />
                                    LinkedIn:
                                </p>
                                <a target="_blank" href="https://www.linkedin.com/in/olemos/" rel="noreferrer">Gabriel Lemos</a>
                            </li>
                            <li>
                                <p>
                                    <FaLinkedin />
                                    LinkedIn:
                                </p>
                                <a target="_blank" href="https://www.linkedin.com/in/igor-silva0612/" rel="noreferrer">Igor Silva</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Links Úteis</h2>
                        <ul>
                            <li>
                                <p>
                                    <FaGithub />
                                    {' '}
                                    Github:
                                </p>
                                <a target="_blank" href="https://github.com/oLemos/digital-bank" rel="noreferrer">Front-end</a>
                            </li>
                            <li>
                                <p>
                                    <FaGithub />
                                    {' '}
                                    Github:
                                </p>
                                <a target="_blank" href="https://github.com/oLemos/back-end" rel="noreferrer">Back-end</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </Container>
    );
}
