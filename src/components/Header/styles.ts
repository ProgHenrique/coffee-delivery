/* eslint-disable prettier/prettier */
import styled from 'styled-components'

interface AttributeProps {
  isScroll: boolean
}

export const HeaderContainer = styled.header.attrs((props: AttributeProps) => ({
  isScroll: props.isScroll,
})) <AttributeProps>`
  max-width: 1120px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  background: ${(props) => props.theme.background};

  box-shadow: 0 4px 6px -6px ${(props) => props.isScroll ? props.theme['base-title'] : props.theme.background};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;

  #logo {
    outline: 0;
    box-shadow: 0 0 0 0 transparent;
  }
`

export const LocationAndShoppingCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const BaseNavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
  height: 2.375rem;
`

export const LocationDiv = styled(BaseNavHeader)`
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-100']};
  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['purple-500']};
  }

  span:last-child {
    color: ${(props) => props.theme['purple-700']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const ShoppingCartDiv = styled(BaseNavHeader)`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  display: flex;
  position: relative;
`

export const ItemsOnShoppingCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: -8px;
  margin-right: -10px;
  border-radius: 999px;
  background: ${(props) => props.theme['yellow-700']};
  position: absolute;
  top: 0;
  right: 0;

  span:only-child {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-100']};
  }
`
