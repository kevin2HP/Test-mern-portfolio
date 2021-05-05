import React from 'react'
import {
    NavWrapper,
    NavItemList, NavItems, NavLinks
} from '../Navbar/NavbarElements.js';
const Navbar = () => {
    return (
        <NavWrapper>
            <NavItemList>
                <NavItems>
                    <NavLinks>Home</NavLinks>
                    <NavLinks>About</NavLinks>
                    <NavLinks>Projects</NavLinks>
                    <NavLinks>Contact</NavLinks>

                </NavItems>
            </NavItemList>
        </NavWrapper>
    )
}

export default Navbar
