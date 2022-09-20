import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.title}>Movies</div>
      </Link>
      <div className={styles.links}>
        <Link to="/play">Play</Link>
        <Link to="/create">Create</Link>
        <Link to="/results">Results</Link>
        <div className="navbar-login">Register | Log In | Log Out</div>
      </div>
    </nav>
  )
}
