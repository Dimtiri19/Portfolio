import React from 'react';
import imgCours from '../assets/cours.png';
import imgFin from '../assets/fin.png';
import imgTable from '../assets/table.png';
import { motion } from 'framer-motion';
import clippy from '../assets/clippy.gif'; 

function Preuve08() {
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
      <h1>Preuves</h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <img
            src={imgCours}
            alt="Cours"
            style={{
              maxWidth: '600px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src={imgFin}
            alt="Fin"
            style={{
              maxWidth: '600px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src={imgTable}
            alt="Table"
            style={{
              maxWidth: '600px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <p>
          J'ai décidé de suivre une formation de Java sur OpenClassroom dans le but d'apprendre comment appliquer le code orienté objet, mais dans un autre langage que le Python vu en cours.<br />
          Le point négatif, c'est que j'ai peut-être réalisé cette formation de 10H de façon trop laxiste, du fait que c'était de l'auto-apprentissage.
 
          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve08;
