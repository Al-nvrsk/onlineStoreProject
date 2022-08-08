import React from 'react'
import classes from './StandartButton.module.css'

export const StandartButton = (props) => {
  return (
    <button className={classes.StandartButton}>
        {props.children}
    </button>
  )
}
