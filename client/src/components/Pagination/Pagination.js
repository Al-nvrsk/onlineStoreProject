import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import {PageBar} from '../UiComponent/pageBar/PageBar'

export const Pagination = observer( () => {
  
    const {device} = useContext(Context)
    
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pagesCount = [1,2,3,4,5]
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    const currentPage = (value) => {
        device.setPage(value)
    }

    return (
    <div>
        { (pages.length > 1) 
            ? <PageBar pages = {pages} set = {currentPage} checked = {device.page}  /> 
            : <div></div>                            
        }
    </div>
  )
})
