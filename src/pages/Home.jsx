import { motion } from 'framer-motion';
import { useState } from 'react';
import maPhoto from '../assets/me.jpg';
import monCV from '../assets/cv.pdf';
import pinguin from '../assets/pinguin.gif';

function Home() {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* PINGUIN EN HAUT À GAUCHE */}
      <img
        src={pinguin}
        alt="Pinguin"
        style={{
          position: 'absolute',
          top: '40px',
          right: '60px',
          width: '100px',
          height: 'auto',
        }}
      />

      <h1>Dimitri Meeus</h1><br />
      <p>Étudiant en technologie de l'informatique</p><br />
      <img
        src={maPhoto}
        alt="Moi"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
          border: '4px solid #0F9E99',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
        }}
      />
      <h2>À propos de moi</h2><br />
      <p>
        Au cours de mes quatre années à l'EPHEC, j'ai eu l'occasion d'acquérir différentes compétences et de les appliquer.<br />
        Avec le temps et grâce à mon stage de fin d'étude, j’ai eu l’occasion d’entrevoir ce que je souhaite faire dans le futur.<br />
        J’ai remarqué une forte attirance pour tout ce qui touche à l’administration des systèmes et des réseaux.<br />
        C’est pourquoi je vais continuer dans cette voie.<br />
        De plus, je compte également prendre du temps pour améliorer mon anglais, que je considère encore comme insuffisant.
      </p><br />

      <h2>Télécharger mon CV</h2>
      <a
        href={monCV}
        download="Dimitri-Meeus-CV.pdf"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.5rem 1.2rem',
          backgroundColor: hover ? '#6A7C94' : '#536878',
          color: '#EAE0C8',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1rem',
          transform: hover ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}
      >
        Télécharger le CV
      </a>
    </motion.div>
  );
}

export default Home;
