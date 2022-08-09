import React from 'react'
import './DeviceItem.css'
import imgEmptyStar from '../img/emptyStar.png'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/consts'

export const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
    <div className='deviceItemConteiner' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id )}>
        {/* <div>  */}
            
            <img src = {process.env.REACT_APP_API_URL + 'api/' + device.img} />
        {/* </div> */}
        <div className='deviceItemName' >
            <div>
                {device.name}
            </div>
            <div className='rating'>
                {device.rating}
                <img  src={imgEmptyStar} />
            </div>
        </div>
    </div>
  )
}
