import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100vh;
    width: 100vw;
    padding: 1rem;
    text-align: center;

    > main,
    header {
        display: flex;
    }

    h1,
    h2 {
        color: #6d41a1;
    }

    header {
        flex-direction: column;
        align-items: center;

        h1 {
            margin: 1rem 0;
        }
    }

    > main {
        margin-top: 2rem;
        justify-content: center;
        align-items: center;

        h2 {
            text-align: left;
        }

        > div {
            display: flex;
            justify-content: space-evenly;
            width: 50rem;

            ul {
                margin: 1rem 0;
                list-style: none;

                li {
                    display: flex;

                    p {
                        display: flex;
                        align-items: center;
                        font-weight: bold;
                        margin-right: 0.5rem;

                        svg {
                            margin-right: 0.5rem;
                        }
                    }

                    a {
                        text-decoration: none;
                        color: ${(props) => props.theme.colors.text};
                        transition: 0.2s;

                        &:hover {
                            transform: scale(1.05);
                            color: #6d41a1;
                        }
                    }
                }
            }
        }
    }
`;
