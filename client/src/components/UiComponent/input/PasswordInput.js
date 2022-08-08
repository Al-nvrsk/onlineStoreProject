import React, { useState } from 'react'
import classes from './PasswordInput.module.css'
import imgNonvisible from '../../img/non_visible.png'
import imgVisible from '../../img/visible.png'

export const PasswordInput = (props) => {
    const [type, setType] = useState('password')
  
const showPass = () => {
    if (props.value && type === 'password') {
    return setType('text')
  }
    else {return setType('password')}
}

return (
    <div className={classes.inputWrapper}>
        <input   type = {type} placeholder = ' Type your password' {...props}  />
        <div className = {classes.inputIcon} onClick = {()=>showPass()}>
            {type === 'password' ?       
            <img src = {imgNonvisible} />
            : <img src = {imgVisible} />}       
        </div>
    </div>
  )
}
