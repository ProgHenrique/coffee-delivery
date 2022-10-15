import {
  Button,
  FinalPriceDiv,
  Orders,
  OrdersAndFinalPriceContainer,
  OrdersDiv,
  RemoveItemDiv,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import {
  MinusIcon,
  PlusIcon,
} from '../../../Home/components/CardsOfCoffees/styles'
import React, { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContexts'

interface OrdersAndFinalPriceProps {
  isSubmitDisabled: boolean
}

export function OrdersAndFinalPrice({
  isSubmitDisabled,
}: OrdersAndFinalPriceProps) {
  const {
    itemsOnShoppingCart,
    setRemoveToShoppingCart,
    setAmountSameItemOnShoppingCart,
    priceFormatted,
  } = useContext(CoffeeContext)

  function handleRemoveToShoppingBuy(event: React.MouseEvent<HTMLDivElement>) {
    const key = event.currentTarget.accessKey
    setRemoveToShoppingCart(key)
  }

  function handleAmountSameItemOnCheckout(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    const target = event.currentTarget.id
    const key = event.currentTarget.accessKey

    switch (target) {
      case 'plusCheckout':
        setAmountSameItemOnShoppingCart('plusCheckout', key)
        return

      case 'minusCheckout':
        setAmountSameItemOnShoppingCart('minusCheckout', key)
        return
      default:
        return null
    }
  }

  const totalPriceOfItems = itemsOnShoppingCart.reduce((priceTotal, item) => {
    const price = Number((item.price * item.amount).toFixed(1))
    return priceTotal + price
  }, 0)

  const priceOfItems = priceFormatted(totalPriceOfItems)
  const finalPrice = priceFormatted(totalPriceOfItems + 3.5)

  return (
    <OrdersAndFinalPriceContainer>
      <OrdersDiv>
        {itemsOnShoppingCart.map((item) => {
          const price = priceFormatted(
            Number((item.price * item.amount).toFixed(1)),
          )

          return (
            <Orders key={item.id}>
              <div>
                <img src={item.path} alt="" width={64} />
                <div id="ItemNameAndRemove">
                  <span>{item.name}</span>
                  <div>
                    <div id="MinusAndPlus">
                      <MinusIcon
                        type="button"
                        id="minusCheckout"
                        accessKey={item.id}
                        onClick={handleAmountSameItemOnCheckout}
                      >
                        <Minus size={14} weight="bold" />
                      </MinusIcon>
                      <span id="ItensAmount">{item.amount}</span>
                      <PlusIcon
                        type="button"
                        id="plusCheckout"
                        accessKey={item.id}
                        onClick={handleAmountSameItemOnCheckout}
                      >
                        <Plus size={14} weight="bold" />
                      </PlusIcon>
                    </div>
                    <RemoveItemDiv
                      accessKey={item.id}
                      id="remove"
                      onClick={handleRemoveToShoppingBuy}
                    >
                      <span>
                        <Trash size={16} />
                      </span>
                      <span>REMOVER</span>
                    </RemoveItemDiv>
                  </div>
                </div>
              </div>
              <span>
                R$ {price[0]},{price[1]}
              </span>
            </Orders>
          )
        })}
      </OrdersDiv>

      <FinalPriceDiv>
        <div>
          <span>Total de itens</span>
          <span>
            R$ {priceOfItems[0]},{priceOfItems[1]}
          </span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <span>Total</span>
          <span>
            R$ {finalPrice[0]},{finalPrice[1]}
          </span>
        </div>
      </FinalPriceDiv>

      <Button disabled={isSubmitDisabled} type="submit">
        CONFIRMAR PEDIDO
      </Button>
    </OrdersAndFinalPriceContainer>
  )
}
