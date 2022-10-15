import experience from './data/experienceData.js';
import ExperienceEntry from './experienceEntry.js';

function Experience () {
    return (
        <div id='experience'>
            <h1 className='title'>Experience</h1>
            <ul className='expList'>
            {experience.map(e => <li key={e.bullets}>
                <ExperienceEntry {...e}/>
                </li>)}
            </ul>
            
        </div>
    )
};

export default Experience;