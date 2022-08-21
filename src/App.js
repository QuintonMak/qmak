import logo from './logo.svg';
import './App.css';
import './bulma.css';
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
import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
  import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee, faEnvelope, faLinkedin, faGithub, faYoutube)
function App() {
  return (
    <div>
      <Router>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
