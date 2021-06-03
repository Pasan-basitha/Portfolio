import React from 'react'
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import HomePic from "./HomePic";
import NavMenu from "./NavMenu";
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';

export default function Home() {
    return (
        <div id="#">
           <NavMenu/>
           <HeroSection/>
           <AboutSection/>
           <ProjectSection/>
           <SkillSection/>
           <ContactSection/>
           <Footer/>
        </div>
    )
}
