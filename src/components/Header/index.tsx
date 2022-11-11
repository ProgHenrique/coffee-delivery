import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  HeaderContainer,
  ItemsOnShoppingCart,
  LocationAndShoppingCartContainer,
  LocationDiv,
  ShoppingCartDiv,
} from './styles'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContexts'

export function Header() {
  const { itemsOnShoppingCart, address } = useContext(CoffeeContext)
  const [isScroll, setIsScroll] = useState(false)

  window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop
    if (scroll === 0) {
      setIsScroll(false)
    } else {
      setIsScroll(true)
    }
  })

  const amountItemsOnShoppingCart = itemsOnShoppingCart.reduce(
    (amountTotal, amountItem) => {
      return amountTotal + amountItem.amount
    },
    0,
  )

  // console.log(document.querySelector('#header')?.clientTop)

  const shoppingCartEmpty = itemsOnShoppingCart.length > 0

  return (
    <HeaderContainer isScroll={isScroll} id="header">
      <nav>
        <NavLink id="logo" to="" end title="Home">
          <img src={logoCoffee} alt="" />
        </NavLink>
      </nav>
      <nav>
        <LocationAndShoppingCartContainer>
          <LocationDiv>
            <span>
              <MapPin size={22} weight="fill" />
            </span>
            {address.city && (
              <span>
                {address.city}, {address.state}
              </span>
            )}
          </LocationDiv>

          {shoppingCartEmpty && (
            <NavLink to="/checkout" end title="Checkout">
              <ShoppingCartDiv>
                <ShoppingCart size={22} weight="fill" />
                <ItemsOnShoppingCart>
                  <span>{amountItemsOnShoppingCart}</span>
                </ItemsOnShoppingCart>
              </ShoppingCartDiv>
            </NavLink>
          )}

          {!shoppingCartEmpty && (
            <ShoppingCartDiv>
              <ShoppingCart size={22} weight="fill" />
            </ShoppingCartDiv>
          )}
        </LocationAndShoppingCartContainer>
      </nav>
    </HeaderContainer>
  )
}
