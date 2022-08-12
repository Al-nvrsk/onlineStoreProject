import React, { useContext, useState } from 'react'
import { ModalWindow } from '../UiComponent/ModalWindow'
import {Context} from '../../'
import { DropdownMenu } from '../UiComponent/dropdownMenu/DropdownMenu'
import './CreateDevice.css'
import { observer } from 'mobx-react-lite'
import { createDevice } from '../../http/deviceApi'
import { CancelButton } from '../UiComponent/button/CancelButton'
import { StandartButton } from '../UiComponent/button/StandartButton'

export const CreateDevice = observer( ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const [name, setName] = useState ('')
    const [price, setPrice] = useState (0)
    const [file, setFile] = useState(null)
   
    const addInfo = () => {
        setInfo([...info,{title: '',description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(value => value.number!==number))
    }

    const selectFile = e =>  {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]:value}:i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append ('name', name)
        formData.append ('price', `${price}`)
        formData.append ('img', file)

        formData.append ('brandId', device.selectedBrand.id)
        formData.append ('typeId', device.selectedType.id)
        
        formData.append ('info', JSON.stringify(info))
        createDevice(formData).then((data) => onHide())
    }

    const checkType = (type) => {
        device.setSelectedType(type)
    }

    const checkBrand = (type) => {
        device.setSelectedBrand(type)
    }

  return (
    <div>
        <ModalWindow active = {show} setActive = {onHide}>
            <div className='deviceModalWindow'>
           
                <div className='devicedropdown'>
                    <span>Device name:</span>
                    <input  placeholder = {'Input device name ...'}
                            value = {name}   
                            onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div className='devicedropdown'>
                    <span>Device cost:</span>
                    <input  type = 'number'
                            value = {price}
                            placeholder = {'Input device cost ...'}
                            onChange = {(e) => setPrice(Number(e.target.value))}
                     />
                </div>
                <div className='devicedropdown'>
                    <span>Device type: </span>
                                                <DropdownMenu   arr = {device.types}
                                                                check = {checkType}                
                    />            
                </div>
                <div className='devicedropdown'>
                    <span>Device Brand: </span>
                    <DropdownMenu   arr = {device.brands}
                                    check = {checkBrand}
                    />
                </div>
                <div className='devicedropdown'>
                    <span>Device photo:</span>
                    <input type = 'file' onChange = {selectFile} />
                </div>
            </div>
            
            <div>
                <button onClick = {addInfo}>Add new characteristics</button>
                {info.map((i) => 
                    <div key={i.number} className = 'charactericticInput'>
                        <input  placeholder = 'Characterictic name' 
                                value = {i.title}
                                onChange = {(e) => changeInfo('title', e.target.value, i.number)}
                        />
                        <input  placeholder='Characterictic description'
                                value = {i.description}
                                onChange = {(e) => changeInfo('description', e.target.value, i.number)}
                        />
                        <button onClick={() => removeInfo(i.number)}> Delete Characterictic </button>
                    </div>
                    
                )}
            </div>

            <div className = 'CreateDeviceEndButton'>
                <StandartButton clicked = {addDevice} > Add device </StandartButton>
                <CancelButton clicked = {onHide}> Close </CancelButton>
            </div>
        </ModalWindow>
    </div>
  )
})
