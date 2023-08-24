import { useState, useEffect } from "react";

function Project({title, desc, links, active, setActiveProject}) {
    // show the content if the project card is active
    // otherwise, is a blank div
    const content = active ? 
    <div className="projectContent"> 
        <p className="desc" style={{fontSize: '120%'}}>  
        {desc}
        </p>
        <picture className = "gameThumbnail">
            <img src={links.imageLink} alt=""/>     
        </picture>
        <div className="projectButtons" style={{textAlign: 'center', zoom: 1.1}}> 
            <a className="button runButton is-primary" target="blank" href={links.projectLink}>
                Open Project
            </a>
            <a className="button sourceButton is-primary" target="blank" href={links.sourceLink}>
                Source Code
            </a>
        </div>
    </div> : <div></div>;

    const colorStyle = active ? 'rgb(93, 115, 148)' : ''
    const textStyle = active ? 'white' : ''

    return (
        <div>
            <div className="projectTitle"
                style={{backgroundColor: colorStyle, color: textStyle}}
                onClick={() => {
                setActiveProject(title);
                }}>{title}</div>
            {content}
        </div>
    )
}

export default Project;