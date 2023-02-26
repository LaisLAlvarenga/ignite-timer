import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  isColor?: 'danger' | 'success' | 'default'
}

export function Button({ isColor = 'default' }: ButtonProps) {
  return <ButtonContainer isColor={isColor}>Clique aqui</ButtonContainer>
}
