import React from 'react';
import preuvePDF from '../assets/LateX.pdf';

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
          J'ai participé au séminaire proposé par madame Guérit, me permettant de découvrir une nouvelle technologie pour rendre mes rapports plus esthétiques.<br />
          Cela m'a été très utile pour la rédaction de mon TFE afin d'avoir un document propre et bien organisé à rendre.

          </p>
        </div>
      </div>
    </div>
  );
}

export default Preuve04;
