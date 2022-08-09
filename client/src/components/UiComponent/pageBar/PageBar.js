import { observer } from 'mobx-react-lite'
import React from 'react'
import './PageBar.css'

export const PageBar =  (props) =>  {
  
   return (
    <div className='pageBar'>
        {props.pages.map( (page,index) => <div   className = {props.checked === page ? 'pageBar_page_picked' :'pageBar_page'}
                                                onClick = {() => props.set(page)}
                                                key = {index} >
                                            {page} 
                                        </div>)                     
        }
    </div>
  )
}