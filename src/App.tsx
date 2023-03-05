import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />

        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
