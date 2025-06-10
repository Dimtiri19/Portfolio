import React from 'react';
import preuvePDF from '../assets/MEEUS_Dimitri_TFEJuin2024_rapport.pdf';
import { motion } from 'framer-motion';

function TFE() {
  return (
    <motion.div
      style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      
    <div style={{ padding: '2rem' }}>
      <h1>Travail de Fin d'Étude</h1>

      <div style={{ overflow: 'auto', width: '100%', maxHeight: '80vh' }}>
        <iframe
          src={preuvePDF}
          title="Preuve PDF"
          width="100%"
          height="1200px"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          style={{
            border: 'none',
            minHeight: '80vh',
            pointerEvents: 'auto'
          }}
        />
      </div>

    </div>
  </motion.div>
  );
}

export default TFE;