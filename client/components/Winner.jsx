import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchResult } from '../actions/winner'
import styles from './Winner.module.scss'

export default function Winner() {
  const play = useSelector((state) => state.play)
  const winner = useSelector((state) => state.winner)
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (play.length === 1 && token) {
      dispatch(fetchResult(play[0], token))
    } else {
      navigate('/play')
    }
  }, [token])

  return (
    <>
      <div className={styles.container}>
        <h2>
          Your favorite food is: <strong>{winner.name}</strong>
        </h2>
        <img
          className={styles.image}
          alt={winner.description}
          src={winner.image_url}
        />
        <p>{winner.name}</p>
        <p>{winner.description}</p>
      </div>
    </>
  )
}
