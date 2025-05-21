import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
  const [sortBy, setSortBy] = useState(''); // par défaut pas de tri

  const items = [
    { nom: 'Hakathon', annee: '2022-2023', reel: '48H', valide: '10H', preuve: 'preuve_01', type: 'activité' },
    { nom: 'Hakathon', annee: '2023-2024', reel: '48H', valide: '10H', preuve: 'preuve_02', type: 'activité' },
    { nom: 'CSCB', annee: '2023-2024', reel: '48H', valide: '10H', preuve: 'preuve_03', type: 'activité' },
    { nom: 'LateX', annee: '2024-2025', reel: '6H', valide: '6H', preuve: 'preuve_04', type: 'formation' },
    { nom: 'Axentys', annee: '2024-2025', reel: '2H', valide: '2H', preuve: 'preuve_05', type: 'conférence' },
    { nom: 'GMT', annee: '2023-2024', reel: '8H', valide: '8H', preuve: 'preuve_06', type: 'formation' },
    { nom: 'VM Essential', annee: '2024-2025', reel: '5H', valide: '5H', preuve: 'preuve_07', type: 'conférence' },
    { nom: 'OpenClassroom Java', annee: '2024-2025', reel: '10H', valide: '10H', preuve: 'preuve_08', type: 'formation en ligne' },
    { nom: 'OpenClassroom Angular', annee: '2024-2025', reel: '10H', valide: '10H', preuve: 'preuve_09', type: 'formation en ligne' }
  ];

  const sortItems = [...items].sort((a, b) => {
    if (sortBy === 'annee') return a.annee.localeCompare(b.annee);
    if (sortBy === 'reel') return parseInt(b.reel) - parseInt(a.reel);
    if (sortBy === 'type') return a.type.localeCompare(b.type);
    return 0;
  });

  return (
    <motion.div
      style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div style={{ padding: '2rem' }}>
        <h1>Portfolio</h1>
        <p>Voici un récapitulatif de mes heures de participation à divers projets et formations :</p>

        {/* Select pour le tri */}
        <label htmlFor="sort" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Trier par :
        </label>
        <select
          id="sort"
          onChange={e => setSortBy(e.target.value)}
          className="select-style"
        >
          <option value="">-- Aucun tri --</option>
          <option value="annee">Année</option>
          <option value="nom">Nom</option>
          <option value="reel">Heures réelles</option>
          <option value="type">Type</option>
        </select>

        <table className="styled-table" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Année</th>
              <th>Heures réelles</th>
              <th>Heures validées</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {sortItems.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link to={`/${item.preuve}`} className="preuve-link">
                    {item.nom}
                  </Link>
                </td>
                <td>{item.annee}</td>
                <td>{item.reel}</td>
                <td>{item.valide}</td>
                <td>{item.type}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: 'bold' }}>
              <td>Total</td><td>—</td><td>182H</td><td>71H</td><td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default About;
