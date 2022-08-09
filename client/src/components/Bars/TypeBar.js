import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../index'
import './TypeBar.css'
import { StandartButton } from '../UiComponent/button/StandartButton'

export const TypeBar = observer( () => {
  const {device} = useContext(Context)

  const choosed = (value) => {
    if (device.selectedType===value) {
        device.setSelectedType({})
    }
    else {
      device.setSelectedType(value)
    }
  }

  return (
    <div className='typeBar'>
      {device.types.map(type => 
        <StandartButton selected = {type.id === device.selectedType.id}  
                        key = {type.id}  
                        clicked = {choosed}
                        value = {type}>
          {type.name}
          </StandartButton>)}

    </div> 
  )
})
