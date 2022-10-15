import {
  AddressToDelivery,
  AddressToDeliveryContainer,
  CurrencyDollarIconSuccess,
  MapPinIconSuccess,
  SuccessOrderMessege,
  SuccessOrderSection,
  TimerIconSuccess,
} from './styles'

import deliveryman from '../../assets/deliveryman.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContexts'

export function Success() {
  const { address, paymentMethod } = useContext(CoffeeContext)
  const street = address.street.split(' ')[0]
  // eslint-disable-next-line eqeqeq
  const havePrefixRua = street === 'Rua' ? '' : 'Rua'
  return (
    <SuccessOrderSection>
      <SuccessOrderMessege>
        <strong>Uhu! Pedido confirmado</strong>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessOrderMessege>

      <AddressToDeliveryContainer>
        <AddressToDelivery>
          <div>
            <MapPinIconSuccess>
              <MapPin size={16} weight="fill" />
            </MapPinIconSuccess>
            <p>
              Entrega em{' '}
              <span>
                {havePrefixRua} {address.street}, {address.houseNumber}
              </span>
              <br /> {address.district} - {address.city}, {address.state}
            </p>
          </div>

          <div>
            <TimerIconSuccess>
              <Timer size={16} weight="fill" />
            </TimerIconSuccess>
            <p>
              Previsão de entrega
              <br /> <span>20 min - 30 min</span>
            </p>
          </div>
          <div>
            <CurrencyDollarIconSuccess>
              <CurrencyDollar size={16} weight="fill" />
            </CurrencyDollarIconSuccess>
            <p>
              Pagamento na entrega
              <br /> <span>{paymentMethod}</span>
            </p>
          </div>
        </AddressToDelivery>
        <img src={deliveryman} alt="" />
      </AddressToDeliveryContainer>
    </SuccessOrderSection>
  )
}
