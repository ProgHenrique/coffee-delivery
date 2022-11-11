import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: auto;
  form {
    display: flex;
    padding: 2.5rem 0;
    gap: 2rem;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    padding: 0 1.5rem;
  }
`

export const FormSection = styled.section`
  width: 640px;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const CheckoutSection = styled.section`
  width: 100%;
`
