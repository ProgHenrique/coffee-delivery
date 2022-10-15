import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeContextProvider } from './contexts/CoffeeContexts'
import { GlobalStyle } from './global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
