import produce from 'immer'
import { CartListItem } from '../../@types/cartListItem'
import { CoffeeType } from '../../@types/coffee'
import { ActionTypes } from './actions'

interface Coffee {
  coffeesInCartList: CartListItem[]
}

export function cartListReducer(coffee: Coffee, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const isAlreadyInCartList = coffee.coffeesInCartList.find(
        (item) => item.id === action.payload.coffee.id,
      )

      if (isAlreadyInCartList) {
        const selectedCoffeeIndex = coffee.coffeesInCartList.findIndex(
          (item) => item.id === action.payload.coffee.id,
        )
        return produce(coffee, (draft) => {
          draft.coffeesInCartList[selectedCoffeeIndex].qtd += 1
        })
      } else {
        const addedCoffee: CartListItem = { ...action.payload.coffee, qtd: 1 }
        return produce(coffee, (draft) => {
          draft.coffeesInCartList.push(addedCoffee)
        })
      }
    }

    case ActionTypes.REMOVE_COFFEE: {
      const selectedCoffeeIndex = coffee.coffeesInCartList.findIndex(
        (item) => item.id === action.payload.id,
      )

      const isInTheCartList = selectedCoffeeIndex > 0

      if (!isInTheCartList) {
        return coffee
      }

      const isTheLastOne =
        coffee.coffeesInCartList[selectedCoffeeIndex].qtd === 1

      if (isTheLastOne) {
        return produce(coffee, (draft) => {
          draft.coffeesInCartList[selectedCoffeeIndex].qtd = 0
          draft.coffeesInCartList.filter(
            (item) => item.id !== action.payload.id,
          )
        })
      } else {
        return produce(coffee, (draft) => {
          draft.coffeesInCartList[selectedCoffeeIndex].qtd -= 1
        })
      }
    }

    case ActionTypes.CLEAR_CART: {
      return produce(coffee, (draft) => {
        draft.coffeesInCartList.map((item) => (item.qtd = 0))
        draft.coffeesInCartList = []
      })
    }

    default:
      return coffee
  }
}
