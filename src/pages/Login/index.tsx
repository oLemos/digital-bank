import { createRef, FormEvent } from 'react';
import * as yup from 'yup';
import { FormContainer } from './styles';

function Login() {
    const agencyRef = createRef<HTMLInputElement>();
    const accountRef = createRef<HTMLInputElement>();
    const passwordRef = createRef<HTMLInputElement>();

    function logInSubmit(event: FormEvent): void {
        // Para previnir o recarregamento descenssário da página.
        event.preventDefault();

        const userInfo = {
            agency: agencyRef.current?.value,
            account: accountRef.current?.value,
            password: passwordRef.current?.value,
        };

        const schema = yup.object().shape({
            agency: yup.number().required(),
            account: yup.number().required(),
            password: yup.string().required(),
        });

        schema
            .validate(userInfo, { abortEarly: false })
            .then((response) => {
                // Ajuste -> Requisição de login
                console.log(response);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    return (
        <FormContainer onSubmit={logInSubmit}>
            <input
                ref={agencyRef}
                placeholder="Agência"
                required
                type="number"
            />
            <input
                ref={accountRef}
                placeholder="Conta"
                required
                type="number"
            />
            <input
                ref={passwordRef}
                placeholder="Senha eletrônica"
                type="password"
                required
            />
            <button type="submit">
                Entrar
            </button>
        </FormContainer>
    );
}

export default Login;
