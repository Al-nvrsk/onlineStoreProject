import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Context } from '../..'
import './BrandBar.css'
import { StandartButton } from '../UiComponent/button/StandartButton'

export const BrandBar = observer(() => {
    const {device} = useContext(Context)

    const choosed = (value) => {
      if (device.selectedBrand===value){
        device.setSelectedBrand({})
      }
      else {
        device.setSelectedBrand(value)
      }
    }

    return (
      <div className='BrandBar'>
        {device.brands.map(brand => 
          <StandartButton selected = {brand.id === device.selectedBrand.id}  
                          key = {brand.id}  
                          clicked = {choosed}
                          value = {brand}>
                                {brand.name}
          </StandartButton>)}
      </div>
    )
})
