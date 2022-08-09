import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { StandartButton } from '../UiComponent/button/StandartButton'
import './Navbar.css'

export const Navbar = observer( () => {
  const {user} = useContext(Context)

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

    return (
    <div className='navbar' style={{backgroundColor: 'red'}}>
        <div>
            <h2> FreeShop </h2>
        </div>
             
        <nav>
            <Link to = {SHOP_ROUTE} > Main Page </Link>
            {user.isAuth ?
                <div>
                    <button >
                        <Link to = {ADMIN_ROUTE}> Admin panel </Link>
                    </ button>                    
                    {/* </StandartButton> */}
                    <button onClick={() => logOut () }> 
                        {/* <Link to = {}> Quit </Link>                 */}
                         Quit 
                    </button>
                </div>
                :
                <div>
                   <button > 
                        <Link to = {LOGIN_ROUTE}> Authorization </Link>
                    </button>
                    <button>one more another button</button>
                </div>

            }
            
        </nav>
    </div>
  )
} )
