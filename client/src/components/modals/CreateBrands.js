import React, {useState} from 'react'
import { createBrand } from '../../http/deviceApi'
import { ModalWindow } from '../UiComponent/ModalWindow'

export const CreateBrands = ({show, onHide}) => {
  
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name:value}).then(data => {
        setValue('')
        onHide()
        })
    } 

  return (  
    <div>
        <ModalWindow active = {show} setActive = {onHide} >
        <input  value = {value} 
                    onChange = {(e) => setValue(e.target.value)} 
            placeholder='Input Brand name' />
            
            <button onClick = {addBrand} > Add brand </button>
            <button onClick = {onHide}> Close </button>
        
        </ModalWindow>
    </div>
  ) 
}
