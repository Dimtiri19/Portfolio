import maPhoto from '../assets/gmt.jpg';

function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>À propos</h1>
      <img
        src={maPhoto}
        alt="Photo"
        style={{ width: '300px', borderRadius: '12px' }}
      />
      <p>Texte test pour vérifier le rendu.</p>
    </div>
  );
}

export default About;
