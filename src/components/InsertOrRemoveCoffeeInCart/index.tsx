import { useContext, useState, useEffect } from 'react'
import { CoffeeType } from '../../@types/coffee'
import { CartContext } from '../../context/CartContext'
import { CartQtdContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

export function InsertOrRemoveCoffeeInCart(data: CoffeeType) {
  const [selectedCoffeQtd, setSelectedCoffeeQtd] = useState<number>(0)

  const { addCoffeeToCartList, removeCoffee, coffeesInCartList } =
    useContext(CartContext)

  function handleAddCoffeToCartList(coffee: CoffeeType) {
    addCoffeeToCartList(coffee)
  }

  function handleRemoveCoffeeFromCartList(id: string) {
    removeCoffee(id)
  }

  useEffect(() => {
    const alreadyExists = coffeesInCartList.some((item) => item.id === data.id)

    if (!alreadyExists) {
      return setSelectedCoffeeQtd(0)
    }

    const indexOfSelectedCoffee = coffeesInCartList.findIndex(
      (item) => item.id === data.id,
    )

    return setSelectedCoffeeQtd(coffeesInCartList[indexOfSelectedCoffee].qtd)
  }, [selectedCoffeQtd, data, coffeesInCartList])

  return (
    <CartQtdContainer>
      <button
        onClick={() => handleRemoveCoffeeFromCartList(data.id)}
        disabled={selectedCoffeQtd === 0}
      >
        <Minus size={14} weight={'fill'} />
      </button>
      <span>{selectedCoffeQtd}</span>
      <button
        onClick={() => handleAddCoffeToCartList(data)}
        disabled={selectedCoffeQtd >= 5}
      >
        <Plus size={14} weight={'fill'} />
      </button>
    </CartQtdContainer>
  )
}
