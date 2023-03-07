import { CoffeeType } from '../../@types/coffee'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART = 'CLEAR_CART',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function addNewCoffeeAction(coffee: CoffeeType) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function removeCoffeeFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}

export function removeItemFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
