import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPlayContent } from '../actions/play'
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
    if (movies.length === 1) {
      navigate('/winner')
    }
  }, [])

  return (
    <div>
      <p>{movieA}</p>
    </div>
  )
}
