import React from 'react'
import HeroSection from '../components/HeroSection/index.js';
import Navbar from '../components/Navbar/index.js';
import SkillSection from '../components/SkillSection/index.js'
const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <SkillSection />
        </>
    )
}

export default HomeScreen;