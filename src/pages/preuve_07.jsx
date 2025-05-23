import React from 'react';
import imgCours from '../assets/vme.png';
import imgFin from '../assets/vme2.jpg';
import { motion } from 'framer-motion';
import clippy from '../assets/clippy.gif';   

function Preuve07() {
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
        </div>

        <div style={{ flex: 1 }}>
          <p>
          Lors de mon stage, on m'a proposé de faire une activité annexe dans le cadre de mon TFE. J'ai eu l'occasion d'aller voir la présentation du nouveau produit de HPE réalisé par Trusteam.<br />
          VMEssentials est un hyperviseur de type 1 qui a pour but de concurrencer VMware. J'ai eu l'occasion de parler avec une grande quantité de personnes que je n'aurais jamais eu la chance de rencontrer.<br />
          Cela m'a aussi permis de découvrir les enjeux cruciaux liés au changement de technologie de virtualisation dans les grandes entreprises.

          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve07;
