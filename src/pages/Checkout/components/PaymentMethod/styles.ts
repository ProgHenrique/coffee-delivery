import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  div:first-child {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    span:first-child {
      color: ${(props) => props.theme['purple-500']};
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
`
export const PaymentChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.75rem;
`

export const PaymentChoice = styled.div`
  label {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.75rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;

    span:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme['purple-500']};
    }

    span:last-child {
      height: 1.1875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:hover + label {
    background: ${(props) => props.theme['base-hover']};
  }

  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-100']};
  }
`
