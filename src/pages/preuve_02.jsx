import React from 'react';
import preuveImg from '../assets/Hackaton23.jpg';

function Preuve02() {
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
            Participation à mon deuxième Hackaton. J'ai appris comment gérer un groupe car j'était le plus âgé.<br />
            Mon point fort était mon expérience et ma détermination comme d'habitude, j'était prêt à faire une nuit blanche.<br /> 
            Parcontre j'ai manqué de créativité lors de la réalisation du projet. Notre Projet se basait sur une IA pour géré la ressource d'une entreprise.
            Mais c'était trop abstrait et non pertinent avec le thème de l'écologie de cette Hackaton.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Preuve02;
