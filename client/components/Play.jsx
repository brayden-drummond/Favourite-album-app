import React from 'react'
import MovieTile from './MovieTile'
import styles from './Play.module.scss'

export default function Play() {
  return (
    <div className={styles.conatiner}>
      <h1>Pick your movie!</h1>
      <MovieTile />
    </div>
  )
}
