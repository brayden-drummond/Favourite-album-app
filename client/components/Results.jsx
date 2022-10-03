import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Results.module.scss'

import { fetchResultsContent } from '../actions/results'
export default function Results() {
  const dispatch = useDispatch()
  const results = useSelector((state) => state.results)
  // const token = useSelector((state) => state.token)

  useEffect(() => {
    //pass in token
    dispatch(fetchResultsContent())
  }, [])
  return (
    <>
      <h1 className={styles.heading}>Here are your results!</h1>
      <div className={styles.container}>
        {results.map((result, i) => {
          return (
            <div key={i} className={styles.movieContainer}>
              <img
                className={styles.image}
                src={results.movieImage}
                alt={results.movieName}
              />
              <p>{results.movieName}</p>
              <p>{results.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
