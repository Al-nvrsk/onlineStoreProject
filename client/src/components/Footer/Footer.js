import React, {useState} from 'react'
import './Footer.css'
import {StandartButton} from '../UiComponent/button/StandartButton'
import { ListOfTools } from './ListOfTools'

export const Footer = () => {

  const [listActive, setListActive ] = useState(false)

  return (
    <div className = 'footer'>
        <div className = 'footerText'>
            <span>This site is made for educational purposes. Not used for Commercial. </span>
            <button className='footerButton' onClick={() => setListActive(true)}>List of used tools</button>
            <span>Source code: https://github.com/Al-nvrsk/onlineStoreProject  </span>
       
        <div className = 'footerListOfTools'>
        <ListOfTools show = {listActive} onHide = {() => setListActive(false)} />
        </div>
      </div>

    </div>
  )
}
