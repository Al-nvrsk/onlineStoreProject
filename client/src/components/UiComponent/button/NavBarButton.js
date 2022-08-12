import React from 'react'
import classes from './NavBarButton.module.css'

export const NavBarButton = (props) => {
  
    return (
        <div >
            <button className = {classes.NavbarButton}
                    onClick = {() => props.clicked()}>
                        {props.children}
            </button>
        </div>
  )
}
