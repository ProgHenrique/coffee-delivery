import styled from 'styled-components'

export const DescriptionCoffeeDeliveryIconsDiv = styled.div`
  display: grid;
  grid-template-columns: 231px 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  max-width: 567px;
`

export const BaseIConsDescriptionCoffeeDelivery = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  margin-right: 0.75rem;
  color: ${(props) => props.theme.white};
`

export const ShoppingCartIcon = styled(BaseIConsDescriptionCoffeeDelivery)`
  background: ${(props) => props.theme['yellow-700']};
`

export const PackageIcon = styled(BaseIConsDescriptionCoffeeDelivery)`
  background: ${(props) => props.theme['base-text']};
`

export const TimerIcon = styled(BaseIConsDescriptionCoffeeDelivery)`
  background: ${(props) => props.theme['yellow-500']};
`

export const CoffeeIcon = styled(BaseIConsDescriptionCoffeeDelivery)`
  background: ${(props) => props.theme['purple-500']};
`
