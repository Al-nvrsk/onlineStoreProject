import React, { useContext, useEffect } from 'react'
import { BrandBar } from '../components/Bars/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { TypeBar } from '../components/Bars/TypeBar'
import './Shop.css'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi'
import { Pagination } from '../components/Pagination/Pagination'
import { CancelButton } from '../components/UiComponent/button/CancelButton'

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

const reset = () => {
  device.setSelectedBrand({})
  device.setSelectedType({})
  
}
  
  return (
    <div className = 'shopContainer'>
      <div className = 'shopTypebar'>
        <TypeBar />
        <div className = 'shopTypebarReset'>
          <CancelButton  clicked = {reset}> 
            Reset filter 
          </CancelButton>
        </div>
      </div>
      <div className='main'>
        <BrandBar />
          
            <DeviceList />
            <Pagination />
          
      </div>
    </div>
      )
})
