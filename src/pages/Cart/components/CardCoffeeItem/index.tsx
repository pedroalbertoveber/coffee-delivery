import { CartListItem } from '../../../../@types/cartListItem'
import { InsertOrRemoveCoffeeInCart } from '../../../../components/InsertOrRemoveCoffeeInCart'
import { CoffeeItemContainer, InfoContainer } from './styles'
import { Trash } from 'phosphor-react'

export function CardCoffeeItem(coffee: CartListItem) {
  return (
    <CoffeeItemContainer>
      <div className="imageContainer">
        <img src={coffee.imagePath} alt={coffee.name} />
      </div>
      <InfoContainer>
        <h4>{coffee.name}</h4>
        <div className="actions">
          <InsertOrRemoveCoffeeInCart {...coffee} />
          <button>
            <Trash size={16} weight="fill" />
            REMOVER
          </button>
        </div>
      </InfoContainer>
      <div>
        <strong>R$ {String(coffee.price.toFixed(2)).replace('.', ',')}</strong>
      </div>
    </CoffeeItemContainer>
  )
}
