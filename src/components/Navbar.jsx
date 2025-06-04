import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Accueil</Link>
      <Link to="/Portfolio" className="nav-link">Portfolio</Link>
      <Link to="/CV" className="nav-link">Curriculum Vitae</Link>
      <Link to="/TFE" className="nav-link">TFE</Link>
    </nav>
  );
}

export default Navbar;