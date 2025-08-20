import React from 'react';
import "../App.css";
import Main_Page from './Main_Page';
import About from './About';
import Project from './Project';
import Skill from './Skill';
import Contant from './Contant';
import Footer from './Footer';
const HOme = () => {
  const text = "VISHWAMITRA KUMAR SINGH";
  const words = text.split(" ");
  return ( 
    <>
     <Main_Page />
     <About />
     <Project />
     <Skill />
     <Contant />
     <Footer />
     </>
  )}

export default HOme;
