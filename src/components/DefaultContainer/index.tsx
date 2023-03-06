import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import { Container } from './styles'

export function DefaultContainer() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
