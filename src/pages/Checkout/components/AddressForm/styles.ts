/* eslint-disable prettier/prettier */
import styled from 'styled-components'

interface AttributeProps {
  inFocus: boolean
}

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.9375rem;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  div:first-child {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    span:first-child {
      color: ${(props) => props.theme['yellow-700']};
    }

    div {
      p:first-child {
        margin-bottom: 2px;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
      }

      span:last-child {
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
  
  @media (max-width: 600px) {
    padding: 2.5rem 2rem;
  }
`

export const FormDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BaseInput = styled.input`
  outline: 0;
  height: 2.625rem;
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }

  &:active {
    border: 1px solid transparent;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-700']};
  }
`

export const InputZipCode = styled(BaseInput)`
  width: 35.71428571428571%;
`
export const InputStreet = styled(BaseInput)`
  width: 100%;
`
export const InputState = styled(BaseInput)`
  width: 20%;
`

export const NumberAndComplementDiv = styled.div`
  display: grid;
  grid-template-columns: 35.71428571428571% 1fr;
  column-gap: 0.75rem;
`

export const InputComplement = styled.div.attrs(
  (props: AttributeProps) => ({
    inFocus: props.inFocus,
  }),
) <AttributeProps>`
  display: flex;
  position: relative;

  &::after {
    display: ${(props) => props.inFocus ? 'none' : 'flex'};
    position: absolute;
    content: 'Opcional';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    font-style: italic;
    top: 50%;
    transform: translate(0, -50%);
    right: 12px;
    color: ${(props) => props.theme['base-label']};
  }

  input[name='complement'] {
    width: 100%;
  }
`

export const CityInformationDiv = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 35.71428571428571% 1fr 10.71%;
  column-gap: 0.75rem;

  @media (max-width: 600px) {
    input[name='city'] {
      width: 100%;
    }
    grid-template-columns: 35.71428571428571% 1fr;
    column-gap: 0.75rem;
  }
`
