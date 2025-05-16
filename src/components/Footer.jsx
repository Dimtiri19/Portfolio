import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#536878',
      color: 'white',
      textAlign: 'center',
      padding: '1rem',
      marginTop: '4rem'
    }}>
      <p>
        Développé par Dimitri Meeus —{' '}
        <a
          href="https://github.com/Dimtiri19?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          Mon GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;