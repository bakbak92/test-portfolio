import React from 'react';
import p3 from './../assets/image/booki.png';
import p4 from './../assets/image/ohmyfood.png';

const BoxProject = () => {

  return (
    <main className='main-project'>
      <div className="title-page-project">
        <h1 className="title">Réalisations</h1>
      </div>
      <figure className='card-project'>
        <a href="https://arbodj.github.io/P3-Arbod-jerome-20022023/#titleActivite" target="_blank" rel="noopener noreferrer" className='link-card-project'>
          <img src={p3} alt="site booki" className='img-card'/>
          <figcaption className='card-text'>
          <p className="text-title-project">Booki</p>
          <p className="text-explain-project">Agence de location d'hébergements de vacances</p>
          <p className="text-description"><strong>Decription</strong> : Transformer une maquette en site web</p>
          <p className="text-objectif"><strong>Objectif</strong> : Gérer le code, la responsivité et le positionnement des éléments HTML5/CSS3</p>
          </figcaption>
        </a>
      </figure>
      <figure className='card-project'>
        <a href="https://arbodj.github.io/P4-ohmyfood-09032023/" target="_blank" rel="noopener noreferrer" className='link-card-project'>
          <img src={p4} alt="site booki" className='img-card'/>
          <figcaption className='card-text'>
          <p className="text-title-project">ohmyfood</p>
          <p className="text-explain-project">site de pré-commande de menu</p>
          <p className="text-description"><strong>Decription</strong> : concevoir un site en mobile first</p>
          <p className="text-objectif"><strong>Objectif</strong> : Mobile first HTML5 et les animations CSS3</p>
          </figcaption>
        </a>
      </figure>
    </main>
  );
};

export default BoxProject;