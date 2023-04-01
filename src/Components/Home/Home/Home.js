import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Header from '../../Share/Header/Header';
import AboutCarloni from '../AboutCarloni/AboutCarloni';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <AboutCarloni></AboutCarloni>
        </div>
    );
};

export default Home;