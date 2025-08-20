import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Component/Navigation';
import Home from './Component/HOme';
import Project from './Component/Project';
import Skill from './Component/Skill';
import Contact from './Component/Contant';
import About from './Component/About'

function App() {
  return (
    <>
      <Router>
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
