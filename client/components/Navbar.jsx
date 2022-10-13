import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import styles from './Navbar.module.scss'

export default function Navbar() {
  const user = useSelector((state) => state.loggedInUser)
  const { logout, loginWithRedirect } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <div className={styles.title}>Home</div>
      </Link>
      <div className={styles.links}>
        <Link to='/movies'>Movies</Link>
        <Link to='/play'>Play</Link>
        <Link to='/create'>Add Movie</Link>
        <Link to='/results'>Results</Link>
        <span>|</span>
        <IfAuthenticated>
          <Link to='/' onClick={handleLogOff}>
            Log Out
          </Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/' onClick={handleSignIn}>
            Log In
          </Link>
        </IfNotAuthenticated>
      </div>
    </nav>
  )
}
