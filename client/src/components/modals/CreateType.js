import React, {useState} from 'react'
import { createType } from '../../http/deviceApi'
import { ModalWindow } from '../UiComponent/ModalWindow'

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
            <input  value = {value} 
                    onChange = {(e) => setValue(e.target.value)}
                    placeholder = {'Input type name ...'}
            />

            
            <button onClick = {addType} > Add type </button>
            <button onClick = {onHide}> Close </button>

        </ModalWindow>
    </div>
  )
}
