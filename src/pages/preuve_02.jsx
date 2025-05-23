import React from 'react';
import preuveImg from '../assets/hackaton23.jpg';
import { motion } from 'framer-motion';
import clippy from '../assets/clippy.gif';   

function Preuve02() {
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
            Participation à mon deuxième Hackaton. J'ai appris comment gérer un groupe car j'était le plus âgé.<br />
            Mon point fort était mon expérience et ma détermination comme d'habitude, j'était prêt à faire une nuit blanche.<br /> 
            Parcontre j'ai manqué de créativité lors de la réalisation du projet. Notre Projet se basait sur une IA pour géré la ressource d'une entreprise.
            Mais c'était trop abstrait et non pertinent avec le thème de l'écologie de cette Hackaton.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve02;
