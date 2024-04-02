import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1 className='propos'>A propos</h1>
            <br />
            <p className='desciption'>
            Je suis Ibrahima Ndiaye, un développeur web 👨‍💻 passionné par la création d'expériences 
            numériques innovantes. Avec une solide expérience dans le développement 
            back-end et les base données, je suis spécialisé dans la conception et 
            la mise en œuvre des API Rest, des sites web dynamiques et conviviaux
             🚀. <br/>Toujours à l'affût des dernières technologies et tendances du web, 
             je m'efforce de créer des solutions personnalisées qui répondent aux 
             besoins uniques de mes clients. Avec une approche axée sur la qualité 
             et l'efficacité, je m'engage à fournir des produits finaux performants
              et esthétiquement agréables. Passionné par mon métier, je suis 
              constamment en quête d'apprentissage et d'amélioration pour offrir 
              des résultats exceptionnels à chaque projet.
            </p>
            <div className='containerbt'>
                <button className='contact'>Contacter moi</button>
            </div>
        </div>
    );
};

export default About;