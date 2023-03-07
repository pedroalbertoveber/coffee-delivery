import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeeType } from '../@types/coffee'
import { cartListReducer } from '../reducers/cartList/reducer'
import {
  addNewCoffeeAction,
  clearCartAction,
  removeCoffeeFromCartAction,
} from '../reducers/cartList/actions'
import { CartListItem } from '../@types/cartListItem'

interface CartList {
  coffeesInCartList: CartListItem[]
  addCoffeeToCartList(data: CoffeeType): void
  removeCoffee(id: string): void
  clearCartList(): void
  verifyCoffeeIsInCartList(id: string): number
}

export const CartContext = createContext({} as CartList)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartListState, dispatch] = useReducer(cartListReducer, {
    coffeesInCartList: [],
  })

  const { coffeesInCartList } = cartListState

  function addCoffeeToCartList(data: CoffeeType) {
    dispatch(addNewCoffeeAction(data))
  }

  function clearCartList() {
    dispatch(clearCartAction())
  }

  function removeCoffee(id: string) {
    dispatch(removeCoffeeFromCartAction(id))
  }

  function verifyCoffeeIsInCartList(id: string): number {
    const isCoffeeInCartList = coffeesInCartList.findIndex(
      (item) => item.id === id,
    )

    if (isCoffeeInCartList > 0) {
      return coffeesInCartList[isCoffeeInCartList].qtd
    } else {
      return 0
    }
  }

  return (
    <CartContext.Provider
      value={{
        coffeesInCartList,
        addCoffeeToCartList,
        clearCartList,
        removeCoffee,
        verifyCoffeeIsInCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
