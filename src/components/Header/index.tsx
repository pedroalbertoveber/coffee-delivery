import Logo from '../../assets/img/Logo.png'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  HeaderContainer,
  ActionsContainer,
  LocationButton,
  GroceryCartButton,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="A purple cup of coffee with a rocket sing" />
      </div>
      <ActionsContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        <GroceryCartButton>
          <ShoppingCart size={22} weight="fill" />
        </GroceryCartButton>
      </ActionsContainer>
    </HeaderContainer>
  )
}
