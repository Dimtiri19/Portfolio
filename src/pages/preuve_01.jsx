import React from 'react';
import preuveImg from '../assets/Hackaton22.jpg';

function Preuve01() {
  return (
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
            Participation à mon tout premier hackathon. J'ai découvert plusieurs éléments durant ces 48 h.<br />
            Pour la première fois, j'ai réellement travaillé en groupe sur un projet de développement informatique.<br />
            J'ai découvert plusieurs frameworks tels que React, Sass, …<br />
            C'est avec ce projet de groupe que j'ai pu découvrir GitHub.<br />
            C'est aussi la première fois que j'ai réalisé un vrai projet complet.<br />
            Mon vrai point faible a été mon manque d'expérience, car je venais tout juste de terminer ma première année, donc je ne maîtrisais que très peu d'éléments.<br />
            Mais, mon point fort à été ma détermination à coder non-stop malgré le faite de devoir faire une nuit blanche.

          </p>
        </div>
      </div>
    </div>
  );
}

export default Preuve01;
