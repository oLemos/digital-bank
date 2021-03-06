import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /*
        Utilizaremos a medida "rem" no lugar de "px". Pois a medida "rem", leva em conta o tamanho da fonte padrão do projeto.
        Agora, aqui no arquivo global iremos utilizar porcentagem, pois caso o usuário esteja utilizando opções de acessibilidade diferentes do padrão,
        como deixar os elementos maiores ou menores, a porcentagem seguirá esta opção do usuário.
    */
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
    }

    // Estes elementos por padrão não pegam a fonte da tag "body". Por isso estamos passando para todos eles aqui.
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
