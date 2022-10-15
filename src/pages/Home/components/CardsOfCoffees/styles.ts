import styled from 'styled-components'

export const MenuOfCoffeesContainer = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
`

export const CardMenuOfCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-bottom: 0.75rem;
    margin-top: -2.5rem;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`

export const CardSubtitle = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
`

export const CoffeeTags = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const PriceAndAddToCart = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  span:first-child {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  span:first-child::before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const AddToCart = styled.div`
  display: flex;
  gap: 0.5rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.375rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    span {
      display: flex;
      justify-content: center;
      font-size: 1rem;
      width: 1.25rem;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.375rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme.white};

    :hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`

export const BaseIcons = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-500']};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
  }

  &:hover {
    color: ${(props) => props.theme['purple-700']};
  }
`

export const MinusIcon = styled(BaseIcons)``

export const PlusIcon = styled(BaseIcons)``
