import React from 'react';
import preuveImg from '../assets/gmt.jpg';
import { motion } from 'framer-motion';
import clippy from '../assets/clippy.gif';   

function Preuve06() {
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
          J'ai eu l'occasion de passer une journée type d'un employé dans la société GMT (9H-18H).<br />
          Dont une visite chez un potentiel client (une école) pour voir toute l'infrastructure à mettre en place pour qu'il y ait le wifi.<br />
          J'ai eu l'occasion de voir comment se déroule le monde professionnel et les différentes contraintes d'un tel projet.

          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve06;
