import { motion } from 'framer-motion';
import maPhoto from '../assets/gmt.jpg';

function About() {
  return (
    <motion.div
      style={{ padding: '2rem' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1>À propos</h1>
      <img
        src={maPhoto}
        alt="Photo"
        style={{ width: '300px', borderRadius: '12px', margin: '1rem 0' }}
      />
      <p>Texte test pour vérifier le rendu.</p>
    </motion.div>
  );
}

export default About;