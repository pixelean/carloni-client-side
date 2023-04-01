import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Header from '../../Share/Header/Header';
import AboutCarloni from '../AboutCarloni/AboutCarloni';
import WhyWorkUS from '../WhyWorkUs/WhyWorkUS';
import HowItWorks from '../HowItWorks/HowItWorks';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <AboutCarloni></AboutCarloni>
            <WhyWorkUS></WhyWorkUS>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;