import React, { useState } from 'react'
import './DropdownMenu.css'
import img from '../../img/dropdownImg.png'


export const DropdownMenu =  (props) => {
  
  const [selectStatus, setSelectStatus] = useState(false)
  const [selectValue, setSelectValue] = useState('')
  
  const activator = (value) => {
        setSelectStatus(false)
        setSelectValue(value.name)
        props.check(value)
  }  

  return (
    <div className = {selectStatus ? 'select is-active' : 'select'} onMouseLeave = {() => setSelectStatus(false)} >
        <div className = 'select__header' onClick={() => setSelectStatus(true)} > 
            <span className = 'select__current' > {selectValue} </span>
           
            <div className = 'select__icon'>
            <img src = {img} />
            </div>
        </div>
        <div className = 'select__body'>
            {props.arr.map((value,index) => <div className = 'select__item' key={value.id} onClick={() => activator(value) } > {value.name} </div> )}  
            {/* <div className = 'select__item' onClick={() => activator('Value 1')} > Value 1 </div>
            <div className = 'select__item' onClick={() => activator('Value 2')} > Value 2 </div>
            <div className = 'select__item' onClick={() => activator('Value 3')}> Value 3 </div> */}
        </div>
    </div>
  )
}
