import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import Navbar from './Navbar'
import Home from './Home'
import Play from './Play'
import Winner from './Winner'
import Results from './Results'
import Create from './Create'
import Movies from './Movies'
import Register from './Register'

import { clearLoggedInUser, updateLoggedInUser } from '../actions/user'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../apis/user'

export default function App() {
  useCacheUser()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearLoggedInUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : navigate('/register')
        })
        .catch((err) => console.errpr(err.message))
    }
  }, [isAuthenticated])

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/play' element={<Play />} />
        <Route path='/winner' element={<Winner />} />
        <Route path='/results' element={<Results />} />
        <Route path='/create' element={<Create />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}
