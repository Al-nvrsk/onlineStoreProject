import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PasswordInput } from '../components/UiComponent/input/PasswordInput'
import { EmailInput } from '../components/UiComponent/input/EmailInput'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import './Auth.css'
import { login, registration } from '../http/userAPI'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { StandartButton } from '../components/UiComponent/button/StandartButton'

export const Auth = observer ( () => {

  const {user, device} = useContext(Context)
   const navigate = useNavigate()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const click = async () => {
    try {
      let data
      
        data = await login( email, password)
  
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE,{replace:true})
      device.setSitePage('Main')
    }
      catch (e) {
        alert(e)
      }
   
  } 

  return (
    
      <div className = 'AuthCard'>
        <h2> Authorization </h2>
        
        <EmailInput placeholder = {'Input email...'} onChange = {(e) => setEmail(e.target.value)} value = {email} />
        <PasswordInput onChange = {(e) => setPassword(e.target.value)} value = {password}  />
          <div className = 'button'>
            <Link className='button_link'   to = {REGISTRATION_ROUTE}> Registration </Link>
            <StandartButton clicked = {click} > Enter </StandartButton>
           //FIXME: delete spare space 
          </div>
      </div>
    
  )
})
