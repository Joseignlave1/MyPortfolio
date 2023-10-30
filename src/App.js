import './index.css'
import './App.css';
import { Headers } from './Headers';
import { ProjectsSection } from './Projects';
import { AboutMe } from './Sections/Aboutme';
import { AboutMeImg } from './Sections/AboutmeImg';
import { NavBar } from './navigation/Navbar';
import { ParticleBackground } from './Background/Particles';
import { Skills } from './Sections/Skills';
import { Names } from './Sections/Names';
import { BackgroundImage } from './ProfileImage/BackgroundImage';
import { ContactForm } from './ContactForm/Contactform';
import Thankyou from './Thankyou';
import React from 'react';


const App = () => {
  return(
    <div className='App'>
    <ParticleBackground/>
    <NavBar/>
    <BackgroundImage/>
    <Headers/>
    <Skills/>
    <Names/>
    <AboutMe/>
    <ProjectsSection/>
    <ContactForm/>
    <Thankyou/>
    </div>
  )
}


export default App;
