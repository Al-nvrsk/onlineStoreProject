import React, {useState} from 'react'
import { createBrand } from '../../http/deviceApi'
import { CancelButton } from '../UiComponent/button/CancelButton'
import { StandartButton } from '../UiComponent/button/StandartButton'
import { ModalWindow } from '../UiComponent/ModalWindow'
import './CreateBrands.css'

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
        <div className='CreateBrandsMain'>
        <input  value = {value} 
                    onChange = {(e) => setValue(e.target.value)} 
            placeholder='Input Brand name' />
            
            <StandartButton clicked = {addBrand} > Add brand </StandartButton>
            <CancelButton clicked = {onHide}> Close </CancelButton>
        </div>
        </ModalWindow>
    </div>
  ) 
}
