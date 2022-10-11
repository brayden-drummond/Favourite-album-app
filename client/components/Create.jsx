import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovie } from '../actions/create'
import { fetchHomeContent } from '../actions/home'
import styles from './Create.module.scss'

export default function Create() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => dispatch(fetchHomeContent()), [])
  const cardImage = useSelector((state) => state.home)

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
    dispatch(addMovie(movie))
    setMovie(initialData)
    navigate('/movies')
  }

  return (
    <div className={styles.container}>
      <div className={styles.video}>
        {/* <video
          src='../../server/public/videos/AddMovieBackground.mp4'
          autoPlay
          loop
          muted
        /> */}
      </div>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={cardImage.imageUrl}
          alt={cardImage.description}
        ></img>
        <h2 className={styles.heading}>Please add a new movie</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.input}>
              <input
                className={styles.inputfield}
                id='name'
                onChange={handleChange}
                value={movie.name}
                name='name'
              />
              <label className={styles.inputlabel} htmlFor='name'>
                Name:
              </label>
            </div>
            <div className={styles.input}>
              <input
                className={styles.inputfield}
                id='description'
                onChange={handleChange}
                value={movie.description}
                name='description'
              />
              <label className={styles.inputlabel} htmlFor='description'>
                Description:
              </label>
            </div>
            <div className={styles.input}>
              <input
                className={styles.inputfield}
                id='image_url'
                onChange={handleChange}
                value={movie.image_url}
                name='image_url'
              />
              <label className={styles.inputlabel} htmlFor='image_url'>
                Image:
              </label>
            </div>
            <div className={styles.buttonbox}>
              <button className={styles.button}>Add Movie</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
