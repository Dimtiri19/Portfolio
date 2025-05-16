import React from 'react';
import preuvePDF from '../assets/Axentys.pdf';

function Preuve04() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Preuve</h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '1rem' }}>
        <iframe
          src={preuvePDF}
          title="Preuve PDF"
          width="50%"
          height="600px"
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
  );
}

export default Preuve04;
