import React, { useContext } from 'react'
import { Route, Redirect, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'
import { Navbar } from './Navbar'
import { observer } from 'mobx-react-lite'

export const AppRouter = observer( () => {
    const {user} = useContext(Context)
    console.log(user)
  return (
        <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key = {path} path = {path} element = {Component}  />
        )}
        
        {publicRoutes.map(({path, Component}) => 
            <Route key = {path} path = {path} element = {Component} />
        )}
        <Route path = "*" element = {publicRoutes[0].Component} />
    </Routes>
  )
})
