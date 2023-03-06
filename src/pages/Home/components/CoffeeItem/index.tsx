import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import { CoffeeType } from '../../../../@types/coffee'
import {
  StyledCoffeeItemContainer,
  StyledTagsContainer,
  CartActionsContainer,
  CartQtdContainer,
} from './styles'

export function CoffeeItem({
  description,
  imagePath,
  name,
  price,
  tags,
}: CoffeeType) {
  return (
    <StyledCoffeeItemContainer>
      <img src={imagePath} alt={description} />
      <StyledTagsContainer>
        {tags.map((item, index) => (
          <span key={index}>{item.toUpperCase()}</span>
        ))}
      </StyledTagsContainer>
      <h4>{name}</h4>
      <p className="coffeeDescription">{description}</p>
      <CartActionsContainer>
        <p>
          R$ <strong>{price}</strong>
        </p>
        <CartQtdContainer>
          <button>
            <Minus size={14} weight={'fill'} />
          </button>
          <span>0</span>
          <button>
            <Plus size={14} weight={'fill'} />
          </button>
        </CartQtdContainer>
        <span className="linkToCart">
          <ShoppingCartSimple size={22} weight={'fill'} />
        </span>
      </CartActionsContainer>
    </StyledCoffeeItemContainer>
  )
}
