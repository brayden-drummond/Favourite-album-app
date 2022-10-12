import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

export default function Navbar() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()

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
        {isAuthenticated ? (
          <div className={styles.auth}>
            <Link to='/' onClick={handleLogOff}>
              Log Out
            </Link>
          </div>
        ) : (
          <div className={styles.auth}>
            <Link to='/' onClick={handleSignIn}>
              Log In
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
