import React from 'react'
import { SkillWrapper, SkillContent, SkillH2, SkillIconsBox, SkillIcon, SkillAttribute } from '../SkillSection/SkillElements.js'
import js from '../../svg/Javascript.svg';
import html from '../../svg/html-5.svg';
import node from '../../svg/nodejs.svg';
import python from '../../svg/python.svg';
import shopify from '../../svg/shopify.svg';
import css from '../../svg/css-3.svg';
import sql from '../../svg/sql-server.svg';
import react from '../../svg/react.svg';
const SkillSection = () => {
    return (
        <SkillWrapper>
            <SkillContent>
                <SkillH2>SKILLS</SkillH2>
                <SkillIconsBox>
                    <SkillIcon src={js}></SkillIcon>
                    <SkillIcon src={html}></SkillIcon>
                    <SkillIcon src={node}></SkillIcon>
                    <SkillIcon src={python}></SkillIcon>
                    <SkillIcon src={shopify}></SkillIcon>
                    <SkillIcon src={css}></SkillIcon>
                    <SkillIcon src={sql}></SkillIcon>
                    <SkillIcon src={react}></SkillIcon>

                    <SkillAttribute>Icons made by <a target="_blank" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect,</a> <a target="_blank" href="https://www.freepik.com" title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></SkillAttribute>
                </SkillIconsBox>
            </SkillContent>

        </SkillWrapper >
    )
}

export default SkillSection
