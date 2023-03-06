import Logo from '../../assets/img/Logo.png'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  HeaderContainer,
  ActionsContainer,
  LocationButton,
  GroceryCartButton,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { coffeesInCartList } = useContext(CartContext)

  const coffeeListItemsQtd = coffeesInCartList.reduce((prevVal, elem) => {
    return prevVal + elem.qtd
  }, 0)

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
          {coffeeListItemsQtd > 0 && <span>{coffeeListItemsQtd}</span>}
        </GroceryCartButton>
      </ActionsContainer>
    </HeaderContainer>
  )
}
