import React, { useState } from 'react';
import images from "../../../src/images/laptop.jpg";
import {
    HeroWrapper,
    HeroH1, HeroH3, HeroContent, HeroBG, HeroDate
} from '../HeroSection/HeroElements.js';
const HeroSection = () => {
    setInterval(updateTime, 1000);
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    function updateTime() {
        let currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }
    return (
        <HeroWrapper>
            <HeroBG src={images} />
            <HeroContent>
                <HeroH1>Kevin Penza</HeroH1>
                <HeroH3>WEB DEVELOPER</HeroH3>
                <HeroDate>{time}</HeroDate>
            </HeroContent>
        </HeroWrapper >
    )
}

export default HeroSection;