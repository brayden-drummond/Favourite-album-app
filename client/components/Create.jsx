import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAddNewMovie } from '../actions/create'
import styles from './Create.module.scss'

export default function Create() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialData = {
    name: '',
    description: '',
    image_url: '',
  }
  const [movie, setMovie] = useState(initialData)

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchAddNewMovie(movie))
    setMovie(initialData)
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className='add-character-box'>
        <h2>Please add a new movie</h2>
        <form onSubmit={handleSubmit}>
          <div className='add-character-form'>
            <label htmlFor='name'>
              Name:
              <input
                id='name'
                onChange={handleChange}
                value={movie.name}
                name='name'
              />
            </label>
            <label htmlFor='description'>
              Description:
              <input
                id='description'
                onChange={handleChange}
                value={movie.description}
                name='description'
              />
            </label>
            <label htmlFor='image_url'>
              Image:
              <input
                id='image_url'
                onChange={handleChange}
                value={movie.image_url}
                name='image_url'
              />
            </label>
            <button className='form-button'>Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  )
}
