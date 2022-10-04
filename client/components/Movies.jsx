import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Movies.module.scss'

import { fetchMoviesContent } from '../actions/movies'
export default function Results() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)
  // const token = useSelector((state) => state.token)

  useEffect(() => {
    //pass in token
    dispatch(fetchMoviesContent())
  }, [])
  return (
    <>
      <h1 className={styles.heading}>Here are your results!</h1>
      <div className={styles.container}>
        {movies.map((movie, i) => {
          return (
            <div key={i} className={styles.movieContainer}>
              <img
                className={styles.image}
                src={movie.image}
                alt={movie.name}
              />
              <p className={styles.name}>{movie.name}</p>
              <p>{movie.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
