import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {
    NavWrapper,
    NavItemList, NavItems, NavLinks
} from '../Navbar/NavbarElements.js';
const Navbar = () => {
    return (
        <NavWrapper>
            <Router>
                <NavItemList>

                    <NavItems><NavLinks to={{ pathname: "https://github.com/kevin2HP" }} target="_blank" >Home</NavLinks> </NavItems>
                    <NavItems><NavLinks>About</NavLinks></NavItems>
                    <NavItems><NavLinks>Projects</NavLinks></NavItems>
                    <NavItems><NavLinks>Contact</NavLinks></NavItems>

                </NavItemList>
            </Router>
        </NavWrapper>
    )
}

export default Navbar
