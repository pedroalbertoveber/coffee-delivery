import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultContainer } from './components/DefaultContainer'
import { Home } from './pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultContainer />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
