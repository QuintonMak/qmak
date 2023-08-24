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
              <Link to="qmak/">Home</Link>
            </li>
            <li>
              <Link to="qmak/projects">Projects</Link>
            </li>
            <li>
              <Link to="qmak/experience">Experience</Link>
            </li>
            <li>
              <a href="Media/Resume_Spring_2023.pdf" target='blank'>Resume</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="qmak/" element={<Home/>} />
          <Route path="qmak/experience" element={<Experience/>} />
          <Route path="qmak/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
