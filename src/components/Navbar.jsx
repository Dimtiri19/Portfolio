import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        backgroundColor: '#536878',
        padding: '10px'
      }}
    >
      <Link
        to="/"
        style={{ color: '#EAE0C8', textDecoration: 'none' }}
      >
        Accueil
      </Link>
      <Link
        to="/a-propos"
        style={{ color: '#EAE0C8', textDecoration: 'none' }}
      >
        À propos
      </Link>
      <Link
        to="/contact"
        style={{ color: '#EAE0C8', textDecoration: 'none' }}
      >
        Contact
      </Link>
    </nav>
  )
}

export default Navbar

