import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../apis/user'
import { updateLoggedInUser } from '../actions/user'

import styles from './Register.module.scss'

export default function Register() {
  //change user to be state.loggedInUser
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: '',
  })
  const [errMessage, setErrMessage] = useState('')

  useEffect(() => {
    if (user.name) navigate('/')
  }, [user])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = {
      auth0Id: user.auth0Id,
      ...form,
    }
    addUser(userInfo, user.token)
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrMessage(err.message))
  }

  const hideError = () => {
    setErrMessage('')
  }

  return (
    <div className={styles.registration}>
      <div className={styles.container}>
        <h1>Movie App</h1>
        <div className={styles.formContainer}>
          <h2>Please complete profile setup</h2>
          {errMessage && <error onClick={hideError}>Error: {errMessage}</error>}
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={form.name}
              onChange={handleChange}
            ></input>
            <button className={styles.button}>Save Profile</button>
          </form>
        </div>
      </div>
    </div>
  )
}
