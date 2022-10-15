import produce from 'immer'
import { ActionTypes } from './actions'

export interface CoffeesContext {
  id: string
  path: string
  name: string
  description: string
  amount: number
  price: number
  tags: {
    id: string
    arrayTags: string[]
  }
}

export interface CoffeesState {
  coffees: CoffeesContext[]
  coffeeId: string | null
  itemsOnShoppingCart: CoffeesContext[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.DECREASE_ITEM_AMOUNT: {
      const currentCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        const amountValue = draft.coffees[currentCoffeeIndex].amount
        draft.coffees[currentCoffeeIndex].amount =
          amountValue < 2 ? 1 : amountValue - 1
      })
    }
    case ActionTypes.INCREASE_ITEM_AMOUNT: {
      const currentCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        const amountValue = draft.coffees[currentCoffeeIndex].amount
        draft.coffees[currentCoffeeIndex].amount = amountValue + 1

        console.log(draft.coffees[currentCoffeeIndex].name)
        console.log(draft.coffees[currentCoffeeIndex].amount)
      })
    }
    case ActionTypes.DECREASE_ITEM_AMOUNT_ON_SHOPPING_CART: {
      const currentCoffeeIndex = state.itemsOnShoppingCart.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        const amountValue = draft.itemsOnShoppingCart[currentCoffeeIndex].amount
        draft.itemsOnShoppingCart[currentCoffeeIndex].amount =
          amountValue < 2 ? 1 : amountValue - 1
      })
    }
    case ActionTypes.INCREASE_ITEM_AMOUNT_ON_SHOPPING_CART: {
      const currentCoffeeIndex = state.itemsOnShoppingCart.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        const amountValue = draft.itemsOnShoppingCart[currentCoffeeIndex].amount
        draft.itemsOnShoppingCart[currentCoffeeIndex].amount = amountValue + 1
      })
    }
    case ActionTypes.ADD_TO_SHOPPING_CART: {
      const currentItemIndex = state.itemsOnShoppingCart.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      const currentCoffeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (currentItemIndex < 0) {
        return produce(state, (draft) => {
          draft.itemsOnShoppingCart.push(action.payload.toShoppingCart)
          const coffeeItem = draft.coffees[currentCoffeIndex]
          coffeeItem.amount = 1
        })
      }

      return produce(state, (draft) => {
        const coffeeItem = draft.coffees[currentCoffeIndex]
        draft.itemsOnShoppingCart[currentItemIndex].amount += coffeeItem.amount
      })
    }
    case ActionTypes.REMOVE_TO_SHOPPING_CART: {
      const currentCoffeeIndex = state.itemsOnShoppingCart.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.itemsOnShoppingCart.splice(currentCoffeeIndex, 1)
      })
    }
    case ActionTypes.REMOVE_ALL_FROM_SHOPPING_CART: {
      return produce(state, (draft) => {
        draft.itemsOnShoppingCart = []
      })
    }
    case ActionTypes.RESET_AMOUNT_COFFEE: {
      const coffeeArray = state.coffees.map((coffee) => {
        if (coffee.amount > 1) {
          return { ...coffee, amount: 1 }
        } else {
          return coffee
        }
      })
      return produce(state, (draft) => {
        draft.coffees = coffeeArray
      })
    }

    default:
      return state
  }
}
