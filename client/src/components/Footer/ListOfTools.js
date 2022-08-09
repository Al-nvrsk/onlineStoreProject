import { ModalWindow } from "../UiComponent/ModalWindow";
import './ListOfTools.css'
import React from 'react'
import { StandartButton } from "../UiComponent/button/StandartButton";

const frontArr = ['React JS', 'Mobx', 'axios', 'react route v6', 'jwt authentication', 'handmade reusebale Ui-components' ]

const backArr = ['Node JS', 'Express', 'PostgreSQL', 'jwt authentication']

export const ListOfTools = ({show,onHide}) => {
  return (
   <div>
    <ModalWindow active = {show} setActive = {onHide} screenwidth = {'300px'} >
      <div className = "listOfTools">
          <h3>Backend: </h3>
            <ul>
              {backArr.map((value, index) => <li key = {index} > {value} </li>)}
            </ul>
          <h3 className = "listofToolsFrontend"> Frontend: </h3>
            <ul>
              {frontArr.map((value, index) => <li key = {index} > {value} </li>)}
            </ul> 
          <div className = "listOfToolsButton">
            <StandartButton clicked = {onHide}> Close </StandartButton>
          </div>
      </div>
    </ModalWindow>
    </div>
  )
}
