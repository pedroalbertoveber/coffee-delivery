import { useEffect, useState } from 'react'
import { CartListItem } from '../../../../@types/cartListItem'
import { BudgetItem, BudgetContainer, ButtonContainer } from './styles'

interface Props {
  cartList: CartListItem[]
}

export function ResumeItemsBudget({ cartList }: Props) {
  const [amountCoffeePrice, setAmountCoffeePrice] = useState<number>(0)
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)

  useEffect(() => {
    if (cartList.length > 0) {
      setAmountCoffeePrice(
        cartList.reduce((prevVal, elem) => {
          return prevVal + elem.price * elem.qtd
        }, 0),
      )

      setDeliveryPrice(amountCoffeePrice > 35 ? amountCoffeePrice * 0.1 : 3.5)
      setTotalAmount(deliveryPrice + amountCoffeePrice)
    }
  }, [cartList, deliveryPrice, amountCoffeePrice])

  function transformToLocaleCurrency(amount: number): string {
    return String(amount.toFixed(2)).replace('.', ',')
  }

  const amountCoffeePriceFormated = transformToLocaleCurrency(amountCoffeePrice)
  const deliveryPriceFormated = transformToLocaleCurrency(deliveryPrice)
  const totalAmountFormated = transformToLocaleCurrency(totalAmount)

  return (
    <BudgetContainer>
      <BudgetItem>
        <span>Total de Itens</span>
        <strong>R$ {amountCoffeePriceFormated}</strong>
      </BudgetItem>
      <BudgetItem>
        <span>Entrega</span>
        <strong>R$ {deliveryPriceFormated}</strong>
      </BudgetItem>
      <BudgetItem>
        <h3>Total</h3>
        <h3>R$ {totalAmountFormated}</h3>
      </BudgetItem>
      <ButtonContainer type="submit">CONFIRMAR PEDIDO</ButtonContainer>
    </BudgetContainer>
  )
}
