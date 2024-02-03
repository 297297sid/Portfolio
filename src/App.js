// App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import styled, { ThemeProvider } from 'styled-components';
import HeroSection from './components/HeroSection/Index';
import Skills from './components/Skills/Index';
import Navbar from './components/Navbar/Index';
import Education from './components/Education/Index';
import Experience from './components/Experience/Index';
import Projects from './components/Projects/Index';
import Contact from './components/Contact/Index.js';
import Footer from './components/Footer/Index.js';
import ProjectDetails from './components/ProjectDetails/Index.js';
const Body = styled.div`
  background-color:${({ theme }) => theme.bg};
  width:100%;
  height:100%;
  overflow-x:hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider  theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          <Navbar />
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience/>
           
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            
            <Education />
            <Contact/>
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
