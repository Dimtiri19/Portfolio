import React from 'react';
import imgCours from '../assets/cscb.png';
import imgFin from '../assets/cscb1.png';
import csc from '../assets/CSC.png';
import csc2 from '../assets/CSC2.png';
 import { motion } from 'framer-motion';   

function Preuve03() {
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
              maxWidth: '700px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src={imgFin}
            alt="Fin"
            style={{
              maxWidth: '700px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
                    <img
            src={csc}
            alt="cs"
            style={{
              maxWidth: '700px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
                    <img
            src={csc2}
            alt="cs2"
            style={{
              maxWidth: '700px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <p>
          J'ai pris le temps de participer au Cyber-Security-Challenge-Belgium 2024 avec Charlier Martin et Ciamala Kombe Greg, formant le groupe Alpharad.<br />  
          Malheureusement, je n'ai retrouvé que très peu de traces de celui-ci. Mais malgré tout, on peut encore voir le groupe sur l'interface officielle du CSCB.<br />
          De plus, il me restait quelques captures d'écran de notre participation.<br />
          Mais mon point fort lors de cette activité a été mon enthousiasme à apprendre un domaine dont je n'avais quasiment aucune connaissance.<br />
          Mon point faible a peut-être été le manque d'efficacité dû au fait que j'y ai participé en distanciel et non en classe avec d'autres groupes.

          </p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Preuve03;
