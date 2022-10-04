import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddNewMovie } from '../actions/create'
import styles from './Create.module.scss'

export default function Create() {
  const dispatch = useDispatch()
  const create = useSelector((state) => state.create)
  const initialData = {
    name: '',
    description: '',
    image_url: '',
  }
  const [movie, setMovie] = useState(initialData)

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchAddNewMovie(event.target))
    setMovie(initialData)
  }

  return <h2>Create</h2>
}
