import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

/* 
  Context-Providers - são componentes que não possui efeito nenhum visual, porém produzem um contexto para os componentes que estão dentro dele.
  É através deles que os componenetes filhos tem acesso aos dados de fora.
  Esse ThemeProvider e BrowserRouter são context-providers 
*/
