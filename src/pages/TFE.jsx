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

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '1rem' }}>
        <iframe
          src={preuvePDF}
          title="Preuve PDF"
          width="100%"
          height="1200px"
          style={{
            border: 'none',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            borderRadius: '8px'
          }}
        />
      </div>
    </div>
  </motion.div>
  );
}

export default TFE;
