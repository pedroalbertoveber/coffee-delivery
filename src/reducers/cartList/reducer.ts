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
      const selectedCoffee: CoffeeType = action.payload.coffee

      const isAlreadyInCartList = coffee.coffeesInCartList.some(
        (item) => item.id === selectedCoffee.id,
      )

      if (isAlreadyInCartList) {
        const selectedCoffeeIndex = coffee.coffeesInCartList.findIndex(
          (item) => item.id === selectedCoffee.id,
        )
        return produce(coffee, (draft) => {
          draft.coffeesInCartList[selectedCoffeeIndex].qtd += 1
        })
      } else {
        const addedCoffee: CartListItem = { ...selectedCoffee, qtd: 1 }
        return produce(coffee, (draft) => {
          draft.coffeesInCartList.push(addedCoffee)
        })
      }
    }

    case ActionTypes.REMOVE_COFFEE: {
      if (coffee.coffeesInCartList.length === 1) {
        if (coffee.coffeesInCartList[0].qtd === 1) {
          return produce(coffee, (draft) => {
            draft.coffeesInCartList = []
          })
        } else {
          return produce(coffee, (draft) => {
            draft.coffeesInCartList[0].qtd -= 1
          })
        }
      }

      const selectedCoffeeId = action.payload.id

      const isInTheCartList = coffee.coffeesInCartList.some(
        (item) => item.id === selectedCoffeeId,
      )

      if (!isInTheCartList) {
        return coffee
      }

      const selectedCoffeeIndex = coffee.coffeesInCartList.findIndex(
        (item) => item.id === action.payload.id,
      )

      const isTheLastOne =
        coffee.coffeesInCartList[selectedCoffeeIndex].qtd === 1

      if (isTheLastOne) {
        console.log(coffee.coffeesInCartList)
        return produce(coffee, (draft) => {
          draft.coffeesInCartList[selectedCoffeeIndex].qtd = 0
          draft.coffeesInCartList = draft.coffeesInCartList.filter((item) => {
            return item.id !== selectedCoffeeId
          })
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

    case ActionTypes.REMOVE_ITEM: {
      const selectedId = action.payload.id

      return produce(coffee, (draft) => {
        draft.coffeesInCartList = draft.coffeesInCartList.filter((item) => {
          return item.id !== selectedId
        })
      })
    }

    default:
      return coffee
  }
}
