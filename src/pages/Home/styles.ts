/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 1120px;
  margin: auto;
`

export const SectionDescription = styled.section`
  display: flex;
  gap: 3.5rem;
  justify-content: space-between;
  padding: 5.75rem 0;
`

export const DescriptionCoffeeDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4.125rem;
`

export const DescriptionCoffeeDeliveryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 588px;
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SectionMenuOfCoffees = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;

  div#headerCards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    strong:first-child {
      font-family: 'Baloo 2', cursive;
      font-size: 2rem;
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    div {
      display: flex;
      gap: 0.5rem;
      list-style-type: none;
      height: 1.5rem;
      width: 25.4375rem;
      position: relative;

      span {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 0.625rem;
        color: ${(props) => props.theme['yellow-500']};
        padding: 0 0.75rem;
        outline: 1px solid ${(props) => props.theme['yellow-500']};
        outline-offset: -1px;
        border-radius: 100px;
        cursor: pointer;
      }

      span.markAsFiltering {
        color: ${(props) => props.theme.white};
        outline: 1px solid transparent;
        background: ${(props) => props.theme['base-label']};
      }


    }
  }
`

export const ResetButtonShow = styled.p`
  position: absolute;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['base-text']};
  box-shadow: 0 0 5px -1px ${(props) => props.theme['purple-700']};
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  animation-name: 'showButtonReset';
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  @keyframes showButtonReset {
    from {
      top: 50%;
      opacity: 0;
    }

    to {
      top: -3rem;
      opacity: 1;
    }
  }
`
