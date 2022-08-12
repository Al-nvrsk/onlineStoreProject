import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { StandartButton } from '../UiComponent/button/StandartButton'
import './Navbar.css'
import img from '../img/Shop.png'
import { NavBarButton } from '../UiComponent/button/NavBarButton'

export const Navbar = observer( () => {
  const {user, device} = useContext(Context)
  

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

    const navigate = useNavigate()

  const changePageAuth = () => {
    navigate(LOGIN_ROUTE)
    device.setSitePage('Auth')
  }

  const changePageMain = () => {
    navigate(SHOP_ROUTE)
    device.setSitePage('Main')
  }

  const changePageAdmin = () => {
    navigate(ADMIN_ROUTE)
    device.setSitePage('Admin')
  }


    return (
    <div className = 'navbar' >
        <div className='navbarLogo' onClick={changePageMain}>
            <h2> FreeShop </h2>
            <img src = {img} />
        </div>
        <div className = 'navbar_buttons'>   
            
            {user.isAuth ?
                <div >
                    {(device.sitePage === 'Main')
                        ? <NavBarButton clicked = {changePageAdmin} >
                            Admin panel
                          </ NavBarButton>
                        : <NavBarButton clicked = {changePageMain} > 
                            Main menu
                          </NavBarButton>
                    }
                    <NavBarButton clicked = {() => logOut () }> 
                         Quit 
                    </NavBarButton>     
                </div>
                :
                <div>
                    {(device.sitePage === 'Main')
                        ? <NavBarButton clicked = {changePageAuth } > 
                            Authorization
                          </NavBarButton>
                        : <NavBarButton clicked = {changePageMain} > 
                            Main menu
                          </NavBarButton>
                }                 
                </div>

            }
        </div>
    </div>
  )
} )
