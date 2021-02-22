import React, { useState } from 'react'
import ContactSection from '../components/Contact';
import ExperienceSection from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/Info';
import { infoObj1 } from '../components/Info/Data';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/Projects';
import Sidebar from '../components/Sidebar';
import SkillsSection from '../components/Skills';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <Hero />
          <InfoSection {...infoObj1} />
          <ProjectsSection />
          <SkillsSection {...infoObj1} />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </>
    )
}

export default Home
