import React, { useState } from 'react'
import './Admin.css'
import { ModalWindow } from '../components/UiComponent/ModalWindow'
import { CreateType } from '../components/modals/CreateType'
import { CreateBrands } from '../components/modals/CreateBrands'
import { CreateDevice } from '../components/modals/CreateDevice'
import { StandartButton } from '../components/UiComponent/button/StandartButton'

export const Admin = () => {

  // const [modalActive, setModalActive ] = useState (true)
  const [typeActive, setTypeActive ] = useState (false)
  const [brandActive, setBrandActive ] = useState (false)
  const [deviceActive, setDeviceActive ] = useState (false)


  return (
    <div className='adminPage'>
        <StandartButton clicked = {() => setTypeActive(true)}> Add Type </StandartButton>
        <StandartButton clicked = {() => setBrandActive(true)} > Add Brand </StandartButton>
        <StandartButton clicked = {() => setDeviceActive(true)} > Add device </StandartButton>
        {/* <ModalWindow active = {modalActive} setActive = {setModalActive} /> */}
   
        <CreateType show = {typeActive} onHide = {() => setTypeActive (false)} />
        <CreateBrands show = {brandActive} onHide = {() => setBrandActive(false)} />
        <CreateDevice show = {deviceActive} onHide = {() => setDeviceActive(false)} />
    </div>
  )
}
