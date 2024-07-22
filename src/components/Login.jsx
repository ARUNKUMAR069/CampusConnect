import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { login as authlogin, login } from '../store/authslice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth.js'
import Buttons from './Buttons.jsx';


const Login = () => {


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const login = async (data) => {
    setError('')
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(authlogin(userData))
          navigate('/')
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <form onSubmit={handleSubmit(login)} className="relative w-full max-w-md p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-md mt-4 overflow-hidden">

        <h2 className="text-2xl font-bold mb-6 text-black text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-black">E-mail:</label>
          <input
            className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#68D2E8] transition duration-300 ease-in-out hover:border-[#68D2E8]"
            type="email"
            id="email"
            placeholder="Enter your e-mail"
            // EMAIL HOOK  VALIDATION 
            {...register('email',
              {
                required: true,
                validate: {
                  mathcPattern: (value) => /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/.test(value) || "Invalid email address"
                }
              })
            }

          // EMAIL HOOK FORM VALIDATION 
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-semibold text-black">Password:</label>
          <input
            className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#68D2E8] transition duration-300 ease-in-out hover:border-[#68D2E8]"
            type="password"
            id="password"
            placeholder="Enter your password"
            // PASSWORD HOOK FORM VALIDATION
            {...register('password', {
              required: true,
              validate: {
                mathcPattern: (value) => /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/.test(value) || "Invalid password"
              }
            })}
          // PASSWORD HOOK FORM VALIDATION 
          />
        </div>
        {/* Basic options */}

        <p className='mb-3'>Don&apos;t have any account?&nbsp; <Link to="/register" className='font-medium text-black transition-all duration-200 hover:underline'>Register</Link></p>


        {/* Submit Button */}
        <div className="flex justify-center">
          <Buttons className="w-full py-3 bg-[#03AED2] text-white rounded-lg hover:bg-[#68D2E8] focus:outline-none focus:bg-[#68D2E8]" type="submit" disabled={loading} children={loading ? "Login..." : "Login"} />

        </div>
      </form>
    </div>
  );
}

export default Login;
