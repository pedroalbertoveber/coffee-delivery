import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './context/CartContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <GlobalStyles />
          <Router />
        </CartContextProvider>
      </ThemeProvider>
    </>
  )
}
