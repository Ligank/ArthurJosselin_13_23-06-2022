import React from 'react';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Features from '../components/features.js'
import {features} from '../data/features.js'
import '../styles/main.css';
import '../styles/accueil.css';

function Accueil() {
  return (
    <div className="App">
     <Header 
          sign= 'false'>
      </Header>
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature) => (
            <Features 
              key={`${feature.id}`}
              img={feature.img}
              alt={feature.alt}
              title={feature.title}
              text={feature.text}>
            </Features>
        ))}
      </section>
    </main>
      <Footer/>
    </div>
  );
}

export default Accueil;