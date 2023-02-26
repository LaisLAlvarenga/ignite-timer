import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    
    :focus {
        outline: 0;
        /* 
            0 no eixo X 
            0 no eixo Y
            0 de Blur
            2px de tamanho 
        */
        box-sizing: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body {
        color: ${(props) => props.theme['gray-300']};
        background-color: ${(props) => props.theme['gray-900']};
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`
