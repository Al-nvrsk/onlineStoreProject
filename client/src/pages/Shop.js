import React, { useContext, useEffect } from 'react'
import { BrandBar } from '../components/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { TypeBar } from '../components/TypeBar'
import { StandartButton } from '../components/UiComponent/button/StandartButton'
import './Shop.css'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi'
import { Pagination } from '../components/UiComponent/pagination/Pagination'

export const Shop = observer( () => {

const {device} = useContext(Context)

useEffect(() => {
   fetchTypes().then(data => device.setTypes(data)) 
   fetchBrands().then(data => device.setBrands(data)) 
   fetchDevices(null, null, 1, 3).then(data => {
    device.setDevices(data.rows);
    device.setTotalCount(data.count)})
  }, [])

useEffect(()=>{
  fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
    device.setDevices(data.rows);
    device.setTotalCount(data.count)})
},[device.page, device.selectedBrand, device.selectedType])

const refresh = () => {
  device.setSelectedBrand({})
  device.setSelectedType({})
  console.log('refresh')
}
  
  return (
 
    <div className='shopContainer'>
      <div className='typebar'>
        <h4>Device type:</h4>
        <TypeBar />
        <button onClick = {() => refresh()}> Refresh filter </button>
      </div>
      <div className='main'>
        <BrandBar />
          
            <DeviceList />
            <Pagination />
          
      </div>
    </div>
      )
})
