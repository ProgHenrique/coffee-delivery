import { MapPinLine } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CoffeeContext } from '../../../../contexts/CoffeeContexts'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  BaseInput,
  CityInformationDiv,
  FormContainer,
  FormDiv,
  InputStreet,
  InputZipCode,
  NumberAndComplementDiv,
  InputComplement,
  InputState,
} from './styles'

export function AddressForm() {
  const { address } = useContext(CoffeeContext)
  const { register } = useFormContext()
  const [isOnFocus, setIsOnFocus] = useState(false)
  const [complementValue, setComplementValue] = useState('')
  const windowSize = useWindowSize()

  useEffect(() => {
    if (!complementValue) {
      setIsOnFocus(false)
    } else {
      setIsOnFocus(true)
    }
  }, [complementValue])
  return (
    <FormContainer>
      <div>
        <span>
          <MapPinLine size={22} />
        </span>
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>
      <FormDiv>
        <InputZipCode
          list="zipCodes"
          type="number"
          placeholder="CEP"
          id="zipCode"
          step={0}
          min={0}
          max={99999999}
          {...register('zipCode', { valueAsNumber: true })}
        />

        <datalist id="zipCodes">
          <option value={address.zipCode} />
        </datalist>
        <InputStreet
          list="streets"
          type="text"
          placeholder="Rua"
          id="street"
          {...register('street')}
        />
        <datalist id="streets">
          <option value={address.street} />
        </datalist>
        <NumberAndComplementDiv>
          <BaseInput
            list="houseNumbers"
            type="number"
            placeholder="Número"
            id="houseNumber"
            {...register('houseNumber', {
              valueAsNumber: true,
            })}
          />
          <datalist id="houseNumbers">
            <option value={address.houseNumber} />
          </datalist>
          <InputComplement id="inputComplement" inFocus={isOnFocus}>
            <BaseInput
              list="complements"
              type="text"
              placeholder="Complemento"
              id="complement"
              value={complementValue}
              {...register('complement')}
              onChange={(e) => setComplementValue(e.target.value)}
            />
            <datalist id="complements">
              <option value={address.complement} />
            </datalist>
          </InputComplement>
        </NumberAndComplementDiv>

        {windowSize > 600 ? (
          <CityInformationDiv>
            <BaseInput
              list="districts"
              type="text"
              placeholder="Bairro"
              id="district"
              {...register('district')}
            />
            <datalist id="districts">
              <option value={address.district} />
            </datalist>

            <BaseInput
              list="citys"
              type="text"
              placeholder="Cidade"
              id="city"
              {...register('city')}
            />
            <datalist id="citys">
              <option value={address.city} />
            </datalist>

            <BaseInput
              list="states"
              type="text"
              placeholder="UF"
              id="state"
              {...register('state', { maxLength: 2 })}
              maxLength={2}
              onChange={(e) => (e.target.value = e.target.value.toUpperCase())}
            />
            <datalist id="states">
              <option value={address.state} />
            </datalist>
          </CityInformationDiv>
        ) : (
          <CityInformationDiv>
            <BaseInput
              list="districts"
              type="text"
              placeholder="Bairro"
              id="district"
              {...register('district')}
            />
            <datalist id="districts">
              <option value={address.district} />
            </datalist>

            <BaseInput
              list="citys"
              type="text"
              placeholder="Cidade"
              id="city"
              {...register('city')}
            />
            <datalist id="citys">
              <option value={address.city} />
            </datalist>
          </CityInformationDiv>
        )}

        {windowSize < 601 && (
          <>
            <InputState
              list="states"
              type="text"
              placeholder="UF"
              id="state"
              {...register('state', { maxLength: 2 })}
              maxLength={2}
              onChange={(e) => (e.target.value = e.target.value.toUpperCase())}
            />
            <datalist id="states">
              <option value={address.state} />
            </datalist>
          </>
        )}
      </FormDiv>
    </FormContainer>
  )
}
