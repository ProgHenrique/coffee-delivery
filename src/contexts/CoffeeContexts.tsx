import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import Coffees from '../pages/Home/exportSVgs'
import {
  addToShoppingCart,
  decreaseItemAmount,
  decreaseItemAmountOnShoppingCart,
  increaseItemAmount,
  increaseItemAmountOnShoppingCart,
  removeAllFromShoppingCart,
  removeToShoppingCart,
  resetAmountCoffees,
} from '../reducers/coffees/actions'
import {
  CoffeesContext,
  coffeesReducer,
  CoffeesState,
} from '../reducers/coffees/reducer'

interface AddressFormData {
  city: string
  complement?: string
  district: string
  houseNumber: string
  paymentMethod?: string
  state: string
  street: string
  zipCode: string
}

interface CoffeeContextType {
  coffees: CoffeesContext[]
  itemsOnShoppingCart: CoffeesContext[]
  address: AddressFormData
  paymentMethod: string
  setCoffeesFilterArray: (coffeesTag: string) => void
  setResetCoffeesList: () => void
  setAmountSameItemCoffees: (operationType: string, id: string) => void
  setAmountSameItemOnShoppingCart: (operationType: string, id: string) => void
  setAddToShoppingCart: (id: string) => void
  setRemoveToShoppingCart: (id: string) => void
  setRemoveAllFromShoppingCart: () => void
  priceFormatted: (price: number) => string[]
  setAddressToDelivery: (address: AddressFormData) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
      coffeeId: null,
      itemsOnShoppingCart: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffees-state-1.0.0',
      )

      if (storedStateAsJSON) {
        const coffeesStates = JSON.parse(storedStateAsJSON) as CoffeesState
        coffeesStates.coffees.map((state) => {
          return (state.amount = 1)
        })

        return coffeesStates
      }
      const newCoffeeArray: CoffeesContext[] = []
      Coffees.map((coffee) => {
        const newCoffe = { ...coffee, amount: 1 }

        newCoffeeArray.push(newCoffe)
        return null
      })

      if (newCoffeeArray) {
        return {
          coffees: newCoffeeArray,
          coffeeId: null,
          itemsOnShoppingCart: [],
        }
      }

      return {
        coffees: [],
        coffeeId: null,
        itemsOnShoppingCart: [],
      }
    },
  )

  const [address, setAddress] = useState<AddressFormData>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:address-delivery-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return {
      city: '',
      complement: '',
      district: '',
      houseNumber: '',
      state: '',
      street: '',
      zipCode: '',
    }
  })

  const [paymentMethod, setPaymentMethod] = useState('')

  const [coffeesFilter, setCoffeesFilter] = useState<CoffeesContext[]>([])

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)
    localStorage.setItem('@coffee-delivery:coffees-state-1.0.0', stateJSON)
  }, [coffeesState])

  useEffect(() => {
    const stateJSON = JSON.stringify(address)
    localStorage.setItem('@coffee-delivery:address-delivery-1.0.0', stateJSON)
  }, [address])

  const { itemsOnShoppingCart } = coffeesState

  const coffees =
    coffeesFilter.length > 0 ? coffeesFilter : coffeesState.coffees

  function setCoffeesFilterArray(coffeesTag: string) {
    if (coffeesFilter.length > 0) {
      const coffeesRefilted = coffeesFilter.filter((coffee) => {
        return coffee.tags.arrayTags.includes(coffeesTag)
      })

      setCoffeesFilter(coffeesRefilted)

      setCoffeesFilter((state) => {
        return state.map((coffee) => {
          return { ...coffee, amount: 1 }
        })
      })

      dispatch(resetAmountCoffees())
    } else {
      const coffeesFilted = coffees.filter((coffee) => {
        return coffee.tags.arrayTags.includes(coffeesTag)
      })

      const coffeesFilterNoRepeated = [...coffeesFilter, ...coffeesFilted]
      setCoffeesFilter([...new Set(coffeesFilterNoRepeated)])

      setCoffeesFilter((state) => {
        return state.map((coffee) => {
          return { ...coffee, amount: 1 }
        })
      })

      dispatch(resetAmountCoffees())
    }
  }

  function setResetCoffeesList() {
    setCoffeesFilter([])
  }

  function setAmountSameItemCoffees(operationType: string, id: string) {
    if (operationType === 'plus') {
      if (coffeesFilter.length > 0) {
        setCoffeesFilter((state) =>
          state.map((coffee) => {
            const amount = coffee.amount
            if (coffee.id === id) {
              return { ...coffee, amount: amount + 1 }
            } else {
              return coffee
            }
          }),
        )
      }
      dispatch(increaseItemAmount(id))
    } else {
      if (coffeesFilter.length > 0) {
        setCoffeesFilter((state) =>
          state.map((coffee) => {
            const amount = coffee.amount
            if (amount === 1) {
              return coffee
            }
            if (coffee.id === id) {
              return { ...coffee, amount: amount + 1 }
            } else {
              return coffee
            }
          }),
        )
      }
      dispatch(decreaseItemAmount(id))
    }
  }

  function setAmountSameItemOnShoppingCart(operationType: string, id: string) {
    if (operationType === 'plusCheckout') {
      dispatch(increaseItemAmountOnShoppingCart(id))
    } else {
      dispatch(decreaseItemAmountOnShoppingCart(id))
    }
  }

  function setAddToShoppingCart(id: string) {
    const toShoppingCart = coffees.find((coffee) => coffee.id === id)

    if (toShoppingCart) {
      dispatch(addToShoppingCart(toShoppingCart, id))
    }
  }

  function setRemoveToShoppingCart(id: string) {
    setCoffeesFilter([])
    dispatch(removeToShoppingCart(id))
  }

  function setRemoveAllFromShoppingCart() {
    setCoffeesFilter([])
    dispatch(removeAllFromShoppingCart())
  }

  function priceFormatted(price: number) {
    const priceStringArray = price.toString().split('.')
    const finalPrice = priceStringArray[0]
    const finalPriceCents =
      priceStringArray.length > 1 ? priceStringArray[1] : '0'

    const priceFormatted = [finalPrice, finalPriceCents.padEnd(2, '0')]

    return priceFormatted
  }

  function setAddressToDelivery(addressFormData: AddressFormData) {
    setPaymentMethod(addressFormData.paymentMethod!)
    delete addressFormData.paymentMethod
    setAddress(addressFormData)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        itemsOnShoppingCart,
        address,
        paymentMethod,
        setCoffeesFilterArray,
        setResetCoffeesList,
        setAmountSameItemCoffees,
        setAmountSameItemOnShoppingCart,
        setAddToShoppingCart,
        setRemoveToShoppingCart,
        setRemoveAllFromShoppingCart,
        priceFormatted,
        setAddressToDelivery,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
