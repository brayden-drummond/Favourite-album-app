import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

import { fetchHomeContent } from '../actions/home'

export default function Home() {
  const dispatch = useDispatch()
  const homeContent = useSelector((state) => state.home)

  useEffect(() => dispatch(fetchHomeContent()), [])
  return (
    <div className={styles.container}>
      <h1>Welcome to your favourite Movie App!</h1>
      <div className={styles.text}>
        <p>Will your favourite movie be {homeContent.name}?</p>
        <img
          className={styles.image}
          src={homeContent.imageUrl}
          alt={homeContent.description}
        ></img>
        <p>Click Play to find out!</p>
      </div>
      <div className={styles.buttoncontainer}>
        <Link to='/play'>
          <button className={styles.button}>Play!</button>
        </Link>
      </div>
    </div>
  )
}
