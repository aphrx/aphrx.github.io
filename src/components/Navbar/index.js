import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'; 
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Aphrx</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
