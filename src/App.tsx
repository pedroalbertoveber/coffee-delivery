import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <h1>Olá Mundo!</h1>

        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
