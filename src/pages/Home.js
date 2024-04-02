import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Pays from '../components/Pays';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Pays />
        </div>
    );
};

export default Home;