import React from 'react'
import { FooterWrapper, FooterContent, FooterH3, FooterLinks, FooterItemList, FooterItems, FooterYear }
    from '../FooterSection/FooterElements.js'
const FooterSection = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterH3>GET IN CONTACT</FooterH3>
                <FooterLinks>
                    <FooterItemList>
                        <FooterItems> <FooterLinks>Home</FooterLinks> </FooterItems>
                        <FooterItems>   <FooterLinks>About</FooterLinks> </FooterItems>
                        <FooterItems>  <FooterLinks>Projects</FooterLinks></FooterItems>
                        <FooterItems>  <FooterLinks>Contact</FooterLinks></FooterItems>
                        <FooterItems>  <FooterLinks href="mailto: kevinp0930@hotmail">kevinp0930@hotmail</FooterLinks></FooterItems>

                    </FooterItemList>
                    <FooterYear>2025</FooterYear>
                </FooterLinks>
            </FooterContent>

        </FooterWrapper>
    )
}

export default FooterSection;
