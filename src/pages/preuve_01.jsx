import React from 'react';
import preuveImg from '../assets/hackaton22.jpg';
import { motion } from 'framer-motion';
import clippy from '../assets/clippy.gif';

function Preuve01() {
  return (
<motion.div
      style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* CLIPPY EN BAS À DROITE */}
      <img
        src={clippy}
        alt="Clippy"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '60px',
          width: '100px',
          height: 'auto',
        }}
      />
      
    <div style={{ padding: '2rem' }}>
      <h1>Preuve</h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '1rem' }}>
        <img
          src={preuveImg}
          alt="Preuve"
          style={{
            maxWidth: '40%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        />

        <div style={{ flex: 1 }}>
          <p>
            Participation à mon tout premier hackathon. J'ai découvert plusieurs éléments durant ces 48 h.<br />
            Pour la première fois, j'ai réellement travaillé en groupe sur un projet de développement informatique.<br />
            J'ai découvert plusieurs frameworks tels que React, Sass, …<br />
            C'est avec ce projet de groupe que j'ai pu découvrir GitHub.<br />
            C'est aussi la première fois que j'ai réalisé un vrai projet complet.<br />
            Mon vrai point faible a été mon manque d'expérience, car je venais tout juste de terminer ma première année, donc je ne maîtrisais que très peu d'éléments.<br />
            Mais, mon point fort à été ma détermination à coder non-stop malgré le faite de devoir faire une nuit blanche.

          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve01;
