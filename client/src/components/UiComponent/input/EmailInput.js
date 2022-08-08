import React from 'react'
import classes from './EmailInput.module.css'

export const EmailInput = (props) => {
  
    return (
        <div className={classes.inputWrapper}>
            <input   type = 'text' placeholder = {props.placeholder} {...props} />         
        </div>

  )
}
