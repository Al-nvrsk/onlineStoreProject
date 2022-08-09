import React from 'react'
import classes from './StandartButton.module.css'

export const StandartButton =  (props) => {
  return (
    <div className = {classes.StandartButtonMain}>
    <button className = { props.selected ? classes.StandartButtonSelected : classes.StandartButton }
            onClick = {() => props.clicked(props.value)}>
            
        {props.children}
    </button>
    </div>
  )
}
