import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import React, { useContext } from 'react'
import {
  AddToCart,
  CardMenuOfCoffee,
  CardSubtitle,
  CoffeeTags,
  MenuOfCoffeesContainer,
  MinusIcon,
  PlusIcon,
  PriceAndAddToCart,
} from './styles'

import { CoffeeContext } from '../../../../contexts/CoffeeContexts'
import { useWindowSize } from '../../../../hooks/useWindowSize'

export function CardsOfCoffees() {
  const {
    coffees,
    setAmountSameItemCoffees,
    setAddToShoppingCart,
    priceFormatted,
  } = useContext(CoffeeContext)

  function handleAmountToBuy(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const target = event.currentTarget.id
    const key = event.currentTarget.accessKey

    switch (target) {
      case 'plus':
        setAmountSameItemCoffees('plus', key)
        return

      case 'minus':
        setAmountSameItemCoffees('minus', key)
        return
      default:
        return null
    }
  }

  function handleAddToShoppingBuy(event: React.MouseEvent<HTMLDivElement>) {
    const key = event.currentTarget.accessKey

    setAddToShoppingCart(key)
  }

  const windowSize = useWindowSize()

  return (
    <MenuOfCoffeesContainer variant={windowSize / 2}>
      {coffees.map((coffee) => {
        const price = priceFormatted(coffee.price)
        return (
          <CardMenuOfCoffee key={coffee.id}>
            <img
              src={coffee.path}
              alt=""
              width={windowSize > 600 ? 120 : 105}
            />
            <CoffeeTags>
              {coffee.tags.arrayTags.map((tag, idx) => {
                return <span key={idx}>{tag}</span>
              })}
            </CoffeeTags>
            <strong>{coffee.name}</strong>
            <CardSubtitle>{coffee.description}</CardSubtitle>
            <PriceAndAddToCart>
              <span>
                {price[0]},{price[1]}
              </span>
              <AddToCart>
                <div>
                  <MinusIcon
                    type="button"
                    accessKey={coffee.id}
                    id="minus"
                    onClick={handleAmountToBuy}
                  >
                    <Minus size={windowSize > 600 ? 14 : 18} weight="bold" />
                  </MinusIcon>
                  <span>{coffee.amount}</span>
                  <PlusIcon
                    type="button"
                    accessKey={coffee.id}
                    id="plus"
                    onClick={handleAmountToBuy}
                  >
                    <Plus size={windowSize > 600 ? 14 : 18} weight="bold" />
                  </PlusIcon>
                </div>
                <div
                  id="cart"
                  accessKey={coffee.id}
                  onClick={handleAddToShoppingBuy}
                >
                  <ShoppingCartSimple size={22} weight="fill" />
                </div>
              </AddToCart>
            </PriceAndAddToCart>
          </CardMenuOfCoffee>
        )
      })}
    </MenuOfCoffeesContainer>
  )
}
