import React from 'react';
import preuvePDF from '../assets/Axentys.pdf';
import { motion } from 'framer-motion';
import clippy from '../assets/clippy.gif';   

function Preuve04() {
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
        <iframe
          src={preuvePDF}
          title="Preuve PDF"
          width="50%"
          height="1200px"
          style={{
            border: 'none',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            borderRadius: '8px'
          }}
        />

        <div style={{ flex: 1 }}>
          <p>
          Ce document prouve ma présence à la conférence donnée par Axentys à l’EPHEC sur tous les outils Azure Microsoft.<br />
          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve04;
