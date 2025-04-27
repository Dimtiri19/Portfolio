import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À propos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
