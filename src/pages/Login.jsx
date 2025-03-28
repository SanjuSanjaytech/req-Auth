
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/authSlice'
import { motion } from 'framer-motion'

export const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [loading, setLoading] = useState(false)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState();
    const navigate = useNavigate()


    useEffect(() => {
        if (isAuthenticated) {
          navigate('/users');
        }
      }, [isAuthenticated]);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setError('')
        setLoading(true)

            if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
                try {
                    const res = await axios.post('https://reqres.in/api/login', {
                        email,
                        password
                    })
                    const token = res.data.token
                    if(token) {
                        localStorage.setItem('token', token )
                        dispatch(login())
                        setIsLoggedIn(true);
                        navigate('/users')
                    } else {
                        setError('Invalid response from server')
                    }
                } catch (err) {
                    setError('Login failed please login again')
                }
            } else {
                setError('Invalid Email and Password')
            }
        
            setLoading(false)
    }

  return (
    <div className='min-h-screen w-full overflow-y-hidden flex '>

      {/* Left Side Illustration / Quote / Brand */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='hidden md:flex flex-col justify-center items-center text-white w-1/2 p-10'
      >
        <h1 className='text-4xl font-bold mb-6 tracking-wide'>Welcome Back 👋</h1>
        <p className='text-lg opacity-90 max-w-sm text-center'>
          Log in, manage your users, and explore insights!
        </p>
      </motion.div>

      {/* Right Side Login Form */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='flex flex-col justify-center items-center w-full md:w-1/2 p-10'
      >
        <div className='w-full max-w-md bg-white p-6 rounded '>
          <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
            Sign In
          </h2>

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium text-gray-600 mb-1'>
                Email
              </label>
              <input
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-600 mb-1'>
                Password
              </label>
              <input
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none'
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type='submit'
              className='w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200'
            >
              { loading ? 'Loading...' : 'Login' }
            </motion.button>


            {error && (
              <p className='text-red-600 text-sm text-center mt-2'>{error}</p>
            )}
          </form>


        </div>
      </motion.div>

    </div>
  )
}
