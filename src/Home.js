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
                    the University of Waterloo. I'm excited to learn more 
                    about math and computer science in the coming years. 
                    Other than that, some of my hobbies include chess and badminton!
                </div>
                <img id='pfp' src='./Images/profilePicture.png' alt="profile"/>
            </article>

        </div>
    );
};

export default Home;