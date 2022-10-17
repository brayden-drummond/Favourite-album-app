import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Movies.module.scss'

import { fetchMoviesContent } from '../actions/movies'
import { deleteMovieAction } from '../actions/delete'

export default function Results() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)
  const token = useSelector((state) => state.user?.token)
  const user = useSelector((state) => state.user)

  const [error, setError] = useState('')

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
                {user.auth0Id === movie.uploaderId ? (
                  <button
                    className={styles.button}
                    onClick={() =>
                      dispatch(deleteMovieAction(movie, token))
                        .then(() => setError(''))
                        .catch((err) => setError(err.message))
                    }
                  >
                    Remove
                  </button>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
