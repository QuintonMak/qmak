import contact from './data/contactData.js';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    return (
        <div className="Home">
            <h1 className='title'>Quinton Mak</h1>
            <ul className='contactList'>
                {contact.map(c => 
                    <li key={c.id}>
                        <a href={c.link} target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon className='fa' icon={c.name} />
                        </a>
                    </li>
                )}
            </ul>
            
            <article id='about'>
                <div className='description'>
                    Hi! I'm Quinton, a Data Science student at 
                    the University of Waterloo. I enjoy learning new things
                    about math and computer science. For example, recently I used Python
                     at a hackathon and learned how to use the google maps library 
                    in two days. As well, I gained experience in Javascript, React and Node js
                    during my first coop placement at WE Accelerate (Manulife stream).
                    Currently, I am exploring the field of machine learning and look forward to 
                    learn more. Other than that, some of my hobbies include chess and badminton!
                </div>
                <img id='pfp' src='Images/profilePicture.jpg' alt="profile" width="400" height="500"/>
            </article>

        </div>
    );
};

export default Home;