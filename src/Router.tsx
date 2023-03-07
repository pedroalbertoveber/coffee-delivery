import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultContainer } from './components/DefaultContainer'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
