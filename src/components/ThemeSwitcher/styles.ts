import styled from 'styled-components';

export const Button = styled.button`
    background: none;
    border: none;
    color: ${(props) =>
        props.theme.title === 'dark' ? props.theme.colors.text : '#6d41a1'};
    outline: none;
`;
