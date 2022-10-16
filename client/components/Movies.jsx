import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Movies.module.scss'

import { fetchMoviesContent } from '../actions/movies'
import { deleteMovieAction } from '../actions/delete'

export default function Results() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)
  const token = useSelector((state) => state.user?.token)

  useEffect(() => {
    dispatch(fetchMoviesContent(token))
  }, [token])
  return (
    <>
      <h1 className={styles.heading}>Here are a list of movies!</h1>
      <div className={styles.container}>
        {movies.map((movie, i) => {
          return (
            <div key={i} className={styles.movieContainer}>
              <img
                className={styles.image}
                src={movie.imageUrl}
                alt={movie.name}
              />
              <p className={styles.name}>{movie.name}</p>
              <p>{movie.description}</p>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => dispatch(deleteMovieAction(movie))}
                >
                  Remove
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
