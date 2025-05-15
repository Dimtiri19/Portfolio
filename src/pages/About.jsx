import maPhoto from '../assets/gmt.jpg';
import React, { useEffect, useState } from 'react';

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/about') // ou ton endpoint
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <div>hello guys...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>À propos</h1>
      <img
        src={maPhoto}
        alt="Illustration à propos"
        style={{
          width: '300px',
          borderRadius: '12px',
          margin: '1rem 0',
          display: 'block'
        }}
      />
      <p>{data.content}</p>
    </div>
  );
}

export default About;
