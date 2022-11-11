import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useNavigate } from 'react-router-dom'

import { AddressForm } from './components/AddressForm'
import { OrdersAndFinalPrice } from './components/OrdersAndFinalPrice'
import { PaymentMethod } from './components/PaymentMethod'

import { FormSection, CheckoutContainer, CheckoutSection } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContexts'

const addressFormValidationSchema = zod.object({
  city: zod.string().min(1, 'Informe a cidade'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  houseNumber: zod.number().min(1, 'Informe o número da casa'),
  paymentMethod: zod.string().min(1, 'Informe o método de pagamento'),
  state: zod.string().min(2, 'Informe o UF do estado'),
  street: zod.string().min(1, 'Informe a rua'),
  zipCode: zod
    .number()
    .min(0, 'Informe CEP')
    .max(99999999, 'O cep deve conter contem 8 digitos'),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const { setAddressToDelivery, setRemoveAllFromShoppingCart } =
    useContext(CoffeeContext)
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      city: '',
      complement: '',
      district: '',
      paymentMethod: '',
      state: '',
      street: '',
    },
  })
  const { handleSubmit, watch, reset } = addressForm

  const formFields = watch([
    'city',
    'district',
    'houseNumber',
    'paymentMethod',
    'state',
    'street',
    'zipCode',
  ])

  const isSubmitDisabled = !formFields

  const navigate = useNavigate()
  function handleFinishedOrder(data: AddressFormData) {
    data.state = data.state.toUpperCase()
    setAddressToDelivery(data)
    reset()
    navigate('/success')

    setRemoveAllFromShoppingCart()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleFinishedOrder)}>
        <FormProvider {...addressForm}>
          <FormSection>
            <strong>Complete seu pedido</strong>
            <AddressForm />

            <PaymentMethod />
          </FormSection>
        </FormProvider>

        <CheckoutSection>
          <strong>Cafés selecionados</strong>
          <OrdersAndFinalPrice isSubmitDisabled={isSubmitDisabled} />
        </CheckoutSection>
      </form>
    </CheckoutContainer>
  )
}
