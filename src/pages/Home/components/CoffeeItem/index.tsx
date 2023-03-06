import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeType } from '../../../../@types/coffee'
import { CartContext } from '../../../../context/CartContext'
import {
  StyledCoffeeItemContainer,
  StyledTagsContainer,
  CartActionsContainer,
  CartQtdContainer,
} from './styles'

export function CoffeeItem(data: CoffeeType) {
  const [selectedCoffeQtd, setSelectedCoffeeQtd] = useState<number>(0)
  const { addCoffeeToCartList, removeCoffee, coffeesInCartList } =
    useContext(CartContext)

  useEffect(() => {
    const CoffeeIndex = coffeesInCartList.findIndex(
      (item) => item.id === data.id,
    )

    if (CoffeeIndex > 0) {
      setSelectedCoffeeQtd(coffeesInCartList[CoffeeIndex].qtd)
    }
  }, [coffeesInCartList, data])

  function handleAddCoffeToCartList(coffee: CoffeeType) {
    addCoffeeToCartList(coffee)
  }

  function handleRemoveCoffeeFromCartList(id: string) {
    removeCoffee(id)
  }

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
        <CartQtdContainer>
          <button onClick={() => handleRemoveCoffeeFromCartList(data.id)}>
            <Minus size={14} weight={'fill'} />
          </button>
          <span>{selectedCoffeQtd}</span>
          <button onClick={() => handleAddCoffeToCartList(data)}>
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
