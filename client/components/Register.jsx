import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../apis/user'
import { updateLoggedInUser } from '../actions/user'

export default function Register() {
  return <h1>Register</h1>
}
