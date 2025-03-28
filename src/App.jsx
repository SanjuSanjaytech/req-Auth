import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Login } from './pages/login'
import Headerfixed from './header/Headerfixed'
import Users from './pages/users'
import PrivateRoute from './private/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])
  return (

    <>

        <BrowserRouter>

        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
        </div>
        
        <Headerfixed isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

          <Routes>
            <Route path='/login' element= {<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/users" element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
               }  
            />
            
          </Routes>
          <ToastContainer position="top-center" autoClose={2000} />

        </BrowserRouter>
    </>
      
  )
}

export default App