import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Context } from '..'
import './BrandBar.css'

export const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
      <div className='BrandBar'>
        {device.brands.map(brand => 
            <div className = {brand.id === device.selectedBrand.id ? 'brandCardSelected' : 'brandCard'}
                key = {brand.id}
                onClick = {() => (device.setSelectedBrand(brand))}
                 >
                  {brand.name}
              </div>)}
      </div>
    )
})
