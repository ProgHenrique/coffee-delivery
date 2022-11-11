import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useFormContext } from 'react-hook-form'
import {
  PaymentChoice,
  PaymentChoiceContainer,
  PaymentContainer,
} from './styles'
import { useEffect, useState } from 'react'

export function PaymentMethod() {
  const { setValue } = useFormContext()
  const [defaultRadio, setDefaultRadio] = useState('CARTÃO DE CRÉDITO')

  useEffect(() => {
    setValue('paymentMethod', defaultRadio)
  }, [defaultRadio, setValue])

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

      <RadioGroup.Root
        required
        asChild
        defaultValue={defaultRadio}
        onClick={() => {
          setDefaultRadio(
            document
              .querySelector('[data-state="checked"]')
              ?.getAttribute('value')!,
          )
        }}
      >
        <PaymentChoiceContainer>
          <PaymentChoice>
            <RadioGroup.Item
              style={{ opacity: 0, position: 'absolute' }}
              id="creditCard"
              value="CARTÃO DE CRÉDITO"
            ></RadioGroup.Item>
            <label htmlFor="creditCard">
              <span>
                <CreditCard size={14} />
              </span>
              <span>CARTÃO DE CRÉDITO</span>
            </label>
          </PaymentChoice>
          <PaymentChoice>
            <RadioGroup.Item
              style={{ opacity: 0, position: 'absolute' }}
              id="debitCard"
              value="CARTÃO DE DÉBITO"
            ></RadioGroup.Item>
            <label htmlFor="debitCard">
              <span>
                <Bank size={14} />
              </span>
              <span>CARTÃO DE DÉBITO</span>
            </label>
          </PaymentChoice>

          <PaymentChoice>
            <RadioGroup.Item
              style={{ opacity: 0, position: 'absolute' }}
              id="cash"
              value="DINHEIRO"
            ></RadioGroup.Item>
            <label htmlFor="cash">
              <span>
                <Money size={14} />
              </span>
              <span>DINHEIRO</span>
            </label>
          </PaymentChoice>
        </PaymentChoiceContainer>
      </RadioGroup.Root>

      {/* <PaymentChoice>
          <input
            type="radio"
            id="creditCard"
            value="CARTÃO DE CRÉDITO"
            {...register('paymentMethod')}
            required
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
            required
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
            required
          />
          <label htmlFor="cash">
            <span>
              <Money size={14} />
            </span>
            <span>DINHEIRO</span>
          </label>
        </PaymentChoice> */}
      {/* </PaymentChoiceContainer> */}
    </PaymentContainer>
  )
}
