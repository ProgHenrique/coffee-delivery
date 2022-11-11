import styled from 'styled-components'

export const SuccessOrderSection = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  @media (max-width: 600px) {
    padding: 1.5rem 1.5rem;
  }
`

export const SuccessOrderMessege = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2.5rem;
  strong {
    display: flex;
    align-items: center;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    height: 2.625rem;
    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`

export const AddressToDeliveryContainer = styled.div`
  display: flex;
  gap: 6.375rem;

  @media (max-width: 600px) {
    padding: 3rem 0;
    flex-direction: column;
    gap: 0rem;
  }
`

export const AddressToDelivery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  position: relative;
  width: 526px;
  background: ${(props) => props.theme.background};
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 6px 36px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${(props) => props.theme['yellow-500']},
      ${(props) => props.theme['purple-500']}
    );
  }

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    p {
      span {
        color: ${(props) => props.theme['base-text']};
        font-weight: 700;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 2rem;
  }
`

export const BaseIcons = styled.span`
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  color: ${(props) => props.theme.background};
`

export const MapPinIconSuccess = styled(BaseIcons)`
  background: ${(props) => props.theme['purple-500']};
`
export const TimerIconSuccess = styled(BaseIcons)`
  background: ${(props) => props.theme['yellow-500']};
`
export const CurrencyDollarIconSuccess = styled(BaseIcons)`
  background: ${(props) => props.theme['yellow-700']};
`
