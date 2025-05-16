import React from 'react';
import imgCours from '../assets/ang2.png';
import imgFin from '../assets/tab2.png';
import imgTable from '../assets/tab3.png';
import { motion } from 'framer-motion';  

function Preuve09() {
  return (
    <motion.div
      style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
    <div style={{ padding: '2rem' }}>
      <h1>Preuves</h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <img
            src={imgCours}
            alt="Cours"
            style={{
              maxWidth: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src={imgFin}
            alt="Fin"
            style={{
              maxWidth: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src={imgTable}
            alt="Table"
            style={{
              maxWidth: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <p>
            J'ai décidé de suivre une formation sur Angular sur OpenClassrooms dans le but d'apprendre un autre framework que React, que j'utilise très souvent.
            Comme Angular est un framework très répandu, je trouve que c'est une véritable plus-value pour être apte à travailler sur d'autres projets.
 
          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve09;
