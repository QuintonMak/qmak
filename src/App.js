import logo from './logo.svg';
import './style/App.css';
import './style/Games.css'
import './style/Experience.css'
import './style/Home.css'
import './style/Projects.css'
import './style/bulma.css';
import Home from './Home.js';
import Experience from './experience.js';
import Projects from './projects.js';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCoffee, faEnvelope, faLinkedin, faGithub, faYoutube)
function App() {
  return (
    <div>
      <Router>
        <nav className="menu">
          <ul>
            <li>
              <Link to="React-Website/">Home</Link>
            </li>
            <li>
              <Link to="React-Website/projects">Projects</Link>
            </li>
            <li>
              <Link to="React-Website/experience">Experience</Link>
            </li>
            <li>
              <a href="Media/Resume_Spring_2023.pdf" target='blank'>Resume</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="React-Website/" element={<Home/>} />
          <Route path="React-Website/experience" element={<Experience/>} />
          <Route path="React-Website/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
