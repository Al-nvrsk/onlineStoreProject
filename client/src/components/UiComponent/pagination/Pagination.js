import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../..'
import './Pagination.css'

export const Pagination = observer( () => {
  
    const {device} = useContext(Context)
    
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pagesCount = [1,2,3,4,5]
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
    <div className='pagination'>
        {pages.map((page,index) => <div className = {device.page === page ? 'pagination_page_picked' :'pagination_page'}
                                        // active = {device.page === page}
                                        onClick = {() => device.setPage(page)}
                                        key = {index} >
                                            {page} 
                                    </div>)}
    </div>
  )
})
