import classes from './CancelButton.module.css'
import React from 'react'

export const CancelButton = (props) => {
    return (
        <div className = {classes.CancelButtonMain}>
        <button className = { classes.CancelButton }
                onClick = {() => props.clicked(props.value)}>
                
            {props.children}
        </button>
        </div>
  )
}
