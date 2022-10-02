import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletePlayContent, fetchPlayContent } from '../actions/play'
import styles from './MovieTile.module.scss'

export default function FoodTile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const movies = useSelector((state) => state.play)

  const movieA = movies[0]
  const movieB = movies[1]

  useEffect(() => {
    //pass in if (token)
    dispatch(fetchPlayContent())
  }, [])

  useEffect(() => {
    if (movies.length == 1) {
      navigate('/winner')
    }
  }, [movies])

  function removeMovie(movieId) {
    dispatch(deletePlayContent(movieId))
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.movieContainer}
        onClick={() => removeMovie(movieB?.id)}
        role='button'
        tabIndex='0'
      >
        <img className={styles.image} src={movieA?.imageUrl} alt={movies.id} />
        <div className={styles.middle}>
          <p className={styles.pickme}>Pick Me!</p>
          <p className={styles.description}>{movieA?.description}</p>
        </div>
      </div>
      <h2 className={styles.h2}>
        <span className={styles.span}>VS</span>
      </h2>
      <div
        className={styles.movieContainer}
        onClick={() => removeMovie(movieA?.id)}
        role='button'
        tabIndex='0'
      >
        <img className={styles.image} src={movieB?.imageUrl} alt={movies.id} />
        <div className={styles.middle}>
          <p className={styles.pickme}>Pick Me!</p>
          <p className={styles.description}>{movieB?.description}</p>
        </div>
      </div>
    </div>
  )
}
