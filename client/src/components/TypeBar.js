import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import './TypeBar.css'

export const TypeBar = observer( () => {
  const {device} = useContext(Context)
  return (
    <div className='typeBar'>
      {device.types.map(type => 
        <div className = {type.id === device.selectedType.id
            ? 'typeCardSelected'
            : 'typeCard'}
            key = {type.id}
            onClick = {() => (device.setSelectedType(type))}
             >
              {type.name}
          </div>)}
        
    </div>
  )
})
