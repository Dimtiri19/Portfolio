import React from 'react';
import imgCours from '../assets/cours.png';
import imgFin from '../assets/fin.png';
import imgTable from '../assets/table.png';

function Preuve08() {
  return (
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
          J'ai décidé de suivre une formation de Java sur OpenClassroom dans le but d'apprendre comment appliquer le code orienté objet, mais dans un autre langage que le Python vu en cours.<br />
          Le point négatif, c'est que j'ai peut-être réalisé cette formation de 10H de façon trop laxiste, du fait que c'était de l'auto-apprentissage.
 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Preuve08;
