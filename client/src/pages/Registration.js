import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PasswordInput } from '../components/UiComponent/input/PasswordInput'
import { EmailInput } from '../components/UiComponent/input/EmailInput'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import './Auth.css'
import { login, registration } from '../http/userAPI'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

export const Registration = observer ( () => {

  const {user} = useContext(Context)
  
  const navigate = useNavigate()
  const location = useLocation()
  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loginName, setLoginName] = useState('')
  
  const click = async () => {
    try {
      let data
//       if(isLogin) {
//         data = await login(email, password)
//       }
//       else {
        data = await registration(loginName, email, password)
      
      user.setUser(user)
      user.setIsAuth(true)
      user.setLoginName(loginName)
      navigate(SHOP_ROUTE,{replace:true})
    }
      catch (e) {
        alert(e.response.data.massage)
      }
   
  } 

  return (
    
      <div className = 'AuthCard'>
        <h2> Registration New User </h2>
        <EmailInput placeholder = {'Input login ...'} onChange = {(e) => setLoginName(e.target.value)} value = {loginName} />
        
        <EmailInput placeholder = {'Input email...'} onChange = {(e) => setEmail(e.target.value)} value = {email} />
        <PasswordInput onChange = {(e) => setPassword(e.target.value)} value = {password}  />
          <div >
            <button className = 'button' onClick={click} > Registration </button>
          </div>
      </div>
    
  )
})