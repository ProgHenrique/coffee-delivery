import styled from 'styled-components'

export const OrdersAndFinalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.9375rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const OrdersDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
`

export const Orders = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    left: 0;
    background: ${(props) => props.theme['base-button']};
    bottom: -1.5rem;
  }

  div:first-child {
    display: flex;
    gap: 1.25rem;

    #ItemNameAndRemove {
      display: flex;
      flex-direction: column;
      width: 10.6875rem;
      gap: 0.5rem;
      span:first-child {
        height: 1.3125rem;
      }
      div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        div:first-child#MinusAndPlus {
          display: flex;
          align-items: center;
          width: 4.5rem;
          height: 2rem;
          padding: 0.5rem;
          border-radius: 6px;
          background: ${(props) => props.theme['base-button']};
          gap: 0.25rem;

          span#ItensAmount {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.25rem;
            height: 1.3125rem;
          }
        }

        div#remove {
          gap: 0.25rem;
        }
      }
    }
  }
`

export const RemoveItemDiv = styled.div`
  width: 5.6875rem;
  border-radius: 6px;
  padding: 0 0.5rem;
  background: ${(props) => props.theme['base-button']};
  align-items: center;
  cursor: pointer;

  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    span:first-child {
      color: ${(props) => props.theme['purple-700']};
    }
    span:last-child {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  span:last-child {
    font-size: 0.75rem;
    line-height: 160%;
  }
`

export const FinalPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;
  }

  div:nth-child(1),
  div:nth-child(2) {
    span:first-child {
      font-size: 0.875rem;
      line-height: 130%;
    }
  }

  div:nth-child(3) {
    span {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const Button = styled.button`
  border: 0;
  border-radius: 6px;
  height: 2.875rem;
  background: ${(props) => props.theme['yellow-500']};
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
