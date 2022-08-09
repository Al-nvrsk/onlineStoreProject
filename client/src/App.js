import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Bars/Navbar";
import './App.css'
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userAPI";
import { observer } from "mobx-react-lite";
import { Footer } from "./components/Footer/Footer";

const App = observer (() => {
  
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect( ()=> {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => {setLoading(false)})
    }, 500)
  
  }, [])

    if (loading) {
      return <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>Loading ...</div>
    }

  return (
    <div className = "MainPage">
    <BrowserRouter>
      <Navbar />
      <div className = {"MainPageContent"}> 
        <AppRouter />
      </div>
      <Footer />
    
    </BrowserRouter>
    </div>
  );
})

export default App;
