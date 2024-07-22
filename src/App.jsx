
import './App.css'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import configure from './config/configure';
import { login, logout } from './store/authslice';
import authService from './appwrite/auth';
function App() {
  
  // LOADING STATE
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  // EFFECT
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({
            userData
          }))
        }
        else {
          dispatch(logout())
        }

      })
      .finally(() => setloading(false))






  }, [])



  const router = createBrowserRouter([

    {
      path: "/",
      element: <> <Navbar /> <Home /></>
    },
    {
      path: "/login",
      element: <> <Navbar /> <Login /></>
    },
    {
      path: "/register",
      element: <> <Navbar /> <Register /></>
    }



  ])


  return (

    <div className=' overflow-x-hidden  bg-slate-600  h-screen'>

      <RouterProvider router={router} />
    </div>
  )

}

export default App
