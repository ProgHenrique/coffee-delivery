import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  PaymentChoice,
  PaymentChoiceContainer,
  PaymentContainer,
} from './styles'

export function PaymentMethod() {
  const { register } = useFormContext()
  return (
    <PaymentContainer>
      <div>
        <span>
          <CurrencyDollar size={22} />
        </span>
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>

      <PaymentChoiceContainer>
        <PaymentChoice>
          <input
            type="radio"
            id="creditCard"
            value="CARTÃO DE CRÉDITO"
            {...register('paymentMethod')}
          />
          <label htmlFor="creditCard">
            <span>
              <CreditCard size={14} />
            </span>
            <span>CARTÃO DE CRÉDITO</span>
          </label>
        </PaymentChoice>
        <PaymentChoice>
          <input
            type="radio"
            id="debitCard"
            value="CARTÃO DE DÉBITO"
            {...register('paymentMethod')}
          />
          <label htmlFor="debitCard">
            <span>
              <Bank size={14} />
            </span>
            <span>CARTÃO DE DÉBITO</span>
          </label>
        </PaymentChoice>
        <PaymentChoice>
          <input
            type="radio"
            id="cash"
            value="DINHEIRO"
            {...register('paymentMethod')}
          />
          <label htmlFor="cash">
            <span>
              <Money size={14} />
            </span>
            <span>DINHEIRO</span>
          </label>
        </PaymentChoice>
      </PaymentChoiceContainer>
    </PaymentContainer>
  )
}
