import projectData from './data/projectData.js'
import Project from './project.js';
import {useState} from 'react';

function Projects () {
    const [activeProject, setActiveProject] = useState('');  // the currently opened project

    const setActiveProjectToggle = (project) => {
        if (project === activeProject) {
            setActiveProject('');
        } else {
            setActiveProject(project);
        }
    }
    // pass activeProject to tell each one if it should be opened or not
    return (<div>
        <h1 className="title">Projects</h1>
        <ul className='projectList'>
            {projectData.map(e => 
                <li key={e.title}>
                    <Project {...e} active={activeProject === e.title} setActiveProject={setActiveProjectToggle}/>
                </li>
            )}
        </ul>
    </div>)
}

export default Projects;