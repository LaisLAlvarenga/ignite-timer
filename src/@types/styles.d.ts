/* Criando uma tipagem especifica para a aplicação, pois o TS não está exibindo as props do Theme */

import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

// Armazenando dentro da var ThemeType as propriedades que o defaultTheme possui.
type ThemeType = typeof defaultTheme

// Criando uma tipagem para o modulo "styled-components"
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// OBS - Arquivos .d, significa que é um arquivo de definição de tipos do JS. Não dev ter código js, apenas tipagens (interface)
