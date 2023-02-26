import {Button} from './components/Button';
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/theme/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>teste</h1>
      <Button isColor='success' />
      <Button isColor='danger'/>
      <Button />
    </ThemeProvider>
  )
}
