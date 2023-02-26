import styled from 'styled-components'

interface ButtonContainerProps {
    isColor: 'danger' | 'success' | 'default'
}

const color = {
    danger: 'red',
    success: 'green',
    default: 'gray'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    height: 40px;
    width: 100px;
    background-color: ${props => color[props.isColor]};
`