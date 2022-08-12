import React, {useState} from 'react'
import { createType } from '../../http/deviceApi'
import { CancelButton } from '../UiComponent/button/CancelButton'
import { StandartButton } from '../UiComponent/button/StandartButton'
import { ModalWindow } from '../UiComponent/ModalWindow'
import './CreateType.css'

export const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addType = () => {
        createType({name:value}).then(data => {
        setValue('')
        onHide()
        })
    }    

  return (
    <div>
        <ModalWindow active = {show} setActive = {onHide}>
            <div className='CreateTypeMain'>
            <input  value = {value} 
                    onChange = {(e) => setValue(e.target.value)}
                    placeholder = {'Input type name ...'}
            />

            
            <StandartButton clicked = {addType} > Add type </StandartButton>
            <CancelButton clicked = {onHide}> Close </CancelButton>
            </div>
        </ModalWindow>
    </div>
  )
}
