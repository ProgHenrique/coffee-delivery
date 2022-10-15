/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import CupOfCoffee from '../../assets/cup-of-coffee.svg'
import { CoffeeContext } from '../../contexts/CoffeeContexts'
import { CardsOfCoffees } from './components/CardsOfCoffees'
import { DescriptionCoffeeDeliveryIcons } from './components/DescriptionCoffeeDeliveryIcons'

import {
  DescriptionCoffeeDeliveryContainer,
  DescriptionCoffeeDeliveryText,
  HomeContainer,
  ResetButtonHidden,
  ResetButtonShow,
  SectionDescription,
  SectionMenuOfCoffees,
} from './styles'

export function Home() {
  const { setCoffeesFilterArray, setResetCoffeesList, coffees } =
    useContext(CoffeeContext)
  const [hasFilterOn, setHasFilterOn] = useState(false)
  const [inDisplayResetButton, setInDisplayResetButton] = useState(false)

  useEffect(() => {
    if (coffees.length === 14) {
      resetAllFilters()
    }
  }, [coffees.length])

  function TagClicked(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    const markAsFiltering = event.currentTarget.classList

    markAsFiltering.add('markAsFiltering')
    setCoffeesFilterArray(event.currentTarget.textContent!)
    setHasFilterOn(true)
  }

  function resetAllFilters() {
    const markAsFiltering = document.querySelectorAll('.markAsFiltering')

    markAsFiltering.forEach((filter) => {
      filter.classList.remove('markAsFiltering')
    })

    setResetCoffeesList()

    setHasFilterOn(false)
    setInDisplayResetButton(true)
  }

  return (
    <HomeContainer>
      <SectionDescription>
        <DescriptionCoffeeDeliveryContainer>
          <DescriptionCoffeeDeliveryText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </DescriptionCoffeeDeliveryText>

          <DescriptionCoffeeDeliveryIcons />
        </DescriptionCoffeeDeliveryContainer>
        <div>
          <img src={CupOfCoffee} alt="" />
        </div>
      </SectionDescription>

      <SectionMenuOfCoffees>
        <div id="headerCards">
          <strong>Nossos cafés</strong>
          <div>
            <span onClick={(e) => TagClicked(e)}>TRADICIONAL</span>
            <span onClick={(e) => TagClicked(e)}>ESPECIAL</span>
            <span onClick={(e) => TagClicked(e)}>COM LEITE</span>
            <span onClick={(e) => TagClicked(e)}>ALCOÓLICO</span>
            <span onClick={(e) => TagClicked(e)}>GELADO</span>
            {hasFilterOn ? (
              <ResetButtonShow onClick={resetAllFilters}>X</ResetButtonShow>
            ) : (
              <ResetButtonHidden inDisplay={inDisplayResetButton}>
                X
              </ResetButtonHidden>
            )}
          </div>
        </div>
        <CardsOfCoffees />
      </SectionMenuOfCoffees>
    </HomeContainer>
  )
}
