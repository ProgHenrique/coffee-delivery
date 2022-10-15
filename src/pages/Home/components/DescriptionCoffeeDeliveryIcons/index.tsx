import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeIcon,
  DescriptionCoffeeDeliveryIconsDiv,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from './styles'

export function DescriptionCoffeeDeliveryIcons() {
  return (
    <DescriptionCoffeeDeliveryIconsDiv>
      <span>
        <ShoppingCartIcon>
          <ShoppingCart size={16} weight="fill" />
        </ShoppingCartIcon>
        Compra simples e segura
      </span>

      <span>
        <PackageIcon>
          <Package size={16} weight="fill" />
        </PackageIcon>
        Embalagem mantém o café intacto
      </span>

      <span>
        <TimerIcon>
          <Timer size={16} weight="fill" />
        </TimerIcon>
        Entrega rápida e rastreada
      </span>

      <span>
        <CoffeeIcon>
          <Coffee size={16} weight="fill" />
        </CoffeeIcon>
        O café chega fresquinho até você
      </span>
    </DescriptionCoffeeDeliveryIconsDiv>
  )
}
