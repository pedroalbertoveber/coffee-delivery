import { ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CoffeeType } from '../../../../@types/coffee'
import { InsertOrRemoveCoffeeInCart } from '../../../../components/InsertOrRemoveCoffeeInCart'
import {
  StyledCoffeeItemContainer,
  StyledTagsContainer,
  CartActionsContainer,
} from './styles'

export function CoffeeItem(data: CoffeeType) {
  return (
    <StyledCoffeeItemContainer>
      <img src={data.imagePath} alt={data.description} />
      <StyledTagsContainer>
        {data.tags.map((item, index) => (
          <span key={index}>{item.toUpperCase()}</span>
        ))}
      </StyledTagsContainer>
      <h4>{data.name}</h4>
      <p className="coffeeDescription">{data.description}</p>
      <CartActionsContainer>
        <p>
          R$ <strong>{String(data.price.toFixed(2)).replace('.', ',')}</strong>
        </p>
        <InsertOrRemoveCoffeeInCart {...data} />
        <NavLink className="linkToCart" to={'/carrinho'}>
          <ShoppingCartSimple size={22} weight={'fill'} />
        </NavLink>
      </CartActionsContainer>
    </StyledCoffeeItemContainer>
  )
}
