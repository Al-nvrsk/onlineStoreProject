import './ModalWindow.css'

import React from 'react'

export const ModalWindow = ({active, setActive, children}) => {
  
  return (
    <div className = {active ? 'modalWindow active' : 'modalWindow' } onClick = { () => setActive(false) }>
        <div className = { active ? 'modalWindow_content active' : 'modalWindow_content' } onClick = { e => e.stopPropagation()} >
            {children}
        </div>
    </div>
  )
}
