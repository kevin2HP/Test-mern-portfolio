import React, { useState } from 'react';
import { AboutWrapper, AboutText, AboutH2, AboutP, AboutImg, AboutContent, AboutImgBox } from '../AboutSection/AboutElements.js';
import cartoonFace from '../../images/webImage.png';
import normFace from '../../images/webImage1.png';
const AboutSection = () => {
    const [currFace, SetFace] = useState(cartoonFace);

    const updateFace = () => {
        currFace === cartoonFace ? SetFace(normFace) : SetFace(cartoonFace);
    };
    return (
        <AboutWrapper>
            <AboutContent>

                <AboutText>
                    <AboutH2>ABOUT ME</AboutH2>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.</AboutP>
                </AboutText>
                <AboutImgBox>
                    <AboutImg onClick={updateFace} src={currFace}></AboutImg>
                </AboutImgBox>
            </AboutContent>
        </AboutWrapper>
    )
}

export default AboutSection
