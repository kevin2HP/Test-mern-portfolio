import React from 'react'
import HeroSection from '../components/HeroSection/index.js';
import Navbar from '../components/Navbar/index.js';
import SkillSection from '../components/SkillSection/index.js';
import AboutSection from '../components/AboutSection/index.js';
import FooterSection from '../components/FooterSection/index.js';
const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <SkillSection />
            <AboutSection />
            <FooterSection />
        </>
    )
}

export default HomeScreen;