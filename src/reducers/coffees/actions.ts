import { CoffeesContext } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  DECREASE_ITEM_AMOUNT = 'DECREASE_ITEM_AMOUNT',
  INCREASE_ITEM_AMOUNT = 'INCREASE_ITEM_AMOUNT',
  DECREASE_ITEM_AMOUNT_ON_SHOPPING_CART = 'DECREASE_ITEM_AMOUNT_ON_SHOPPING_CART',
  INCREASE_ITEM_AMOUNT_ON_SHOPPING_CART = 'INCREASE_ITEM_AMOUNT_ON_SHOPPING_CART',
  ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART',
  REMOVE_TO_SHOPPING_CART = 'REMOVE_TO_SHOPPING_CART',
  REMOVE_ALL_FROM_SHOPPING_CART = 'REMOVE_ALL_FROM_TO_SHOPPING_CART',
  RESET_AMOUNT_COFFEE = 'RESET_AMOUNT_COFFEE',
}

export function decreaseItemAmount(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_AMOUNT,
    payload: {
      coffeeId,
    },
  }
}

export function increaseItemAmount(coffeeId: string) {
  return {
    type: ActionTypes.INCREASE_ITEM_AMOUNT,
    payload: {
      coffeeId,
    },
  }
}
export function increaseItemAmountOnShoppingCart(coffeeId: string) {
  return {
    type: ActionTypes.INCREASE_ITEM_AMOUNT_ON_SHOPPING_CART,
    payload: {
      coffeeId,
    },
  }
}

export function decreaseItemAmountOnShoppingCart(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_AMOUNT_ON_SHOPPING_CART,
    payload: {
      coffeeId,
    },
  }
}

export function addToShoppingCart(
  toShoppingCart: CoffeesContext,
  coffeeId: string,
) {
  return {
    type: ActionTypes.ADD_TO_SHOPPING_CART,
    payload: {
      toShoppingCart,
      coffeeId,
    },
  }
}

export function removeToShoppingCart(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_TO_SHOPPING_CART,
    payload: {
      coffeeId,
    },
  }
}

export function removeAllFromShoppingCart() {
  return {
    type: ActionTypes.REMOVE_ALL_FROM_SHOPPING_CART,
  }
}

export function resetAmountCoffees() {
  return {
    type: ActionTypes.RESET_AMOUNT_COFFEE,
  }
}
