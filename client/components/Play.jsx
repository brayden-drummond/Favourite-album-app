import React from 'react'
import MovieTile from './MovieTile'
import styles from './Play.module.scss'

export default function Play() {
  return (
    <div className={styles.container}>
      <h1>Please select your favourite movie!</h1>
      <MovieTile />
    </div>
  )
}
