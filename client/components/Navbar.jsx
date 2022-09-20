import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-title">Movies</div>
      </Link>
      <div className="navbar-links">
        <Link to="/play">Play</Link>
        <Link to="/create">Create</Link>
        <Link to="/results">Results</Link>
        <div className="navbar-login">Register | Log In | Log Out</div>
      </div>
    </nav>
  )
}
