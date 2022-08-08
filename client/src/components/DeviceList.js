import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { DeviceItem } from './UiComponent/DeviceItem'
import { Context } from '..'
import './DeviceList.css'

export const DeviceList = observer (() => {
  const {device} = useContext(Context) 

  return (
    <div className = 'deviceListConteiner'>
        {device.devices.map(device => 
          <DeviceItem key = {device.id} device = {device} />
          )}
    </div>
  )
})
