import contact from './data/contactData.js';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";

function Home() {

    return (
        <div className="Home">
            <div className='animateTitle'>
            <h1 className={'title'}>Quinton Mak</h1>
            <ul className='contactList'>
                {contact.map(c => 
                    <li key={c.id}>
                        <a href={c.link} target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon className='fa' icon={c.name} />
                        </a>
                    </li>
                )}
            </ul>
            </div>
            
            
            <article id='about'>
                <div className='description'>
                    Hi! I'm Quinton, a Data Science student at 
                    the University of Waterloo. I enjoy learning about math and computer science. 
                    Other than school, I've learned about computer science and programming through 
                    hackathons and internships.
                    Currently, I am exploring the field of machine learning and look forward to 
                    learn more. Other than that, some of my hobbies include chess and badminton!
                </div>
                <img id='pfp' src='Images/profilePicture.jpg' alt="profile" width="400" height="500"/>
            </article>

        </div>
    );
};

export default Home;