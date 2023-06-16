import "./Projects.css"
import React, { useState } from 'react';

const projects = [
  {
    name: 'Project 1',
    description: 'This is project 1',
    imageUrl: 'https://example.com/project1-image.jpg',
    projectUrl: 'https://example.com/project1',
  },
  {
    name: 'Project 2',
    description: 'This is project 2',
    imageUrl: 'https://example.com/project2-image.jpg',
    projectUrl: 'https://example.com/project2',
  },
  {
    name: 'Project 3',
    description: 'This is project 3',
    imageUrl: 'https://example.com/project3-image.jpg',
    projectUrl: 'https://example.com/project3',
  },
];



const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const currentProject = projects[currentProjectIndex];

    return(
        <div className="project">
            <div className="project-left">
                <div className="project-desc">
                    <div className="project-title">{currentProject.name}
                    </div>
                    <p className="project-text">{currentProject.description}</p>
                    <button className="project-btn">View Project →</button>
                    <div className="arrow-button">
                        <button onClick={handlePreviousProject} className="arrow-left">⇦</button>
                        <button onClick={handleNextProject} className="arrow-right">⇨</button>
                    </div>
                </div>
            </div>
            <div className="project-right">
                <img src="" alt="proj1" className="back-img"></img>
                <img src="" alt="proj2" className="front-img"></img>
                <img src="" alt="proj3" className="back-img"></img>
            </div>
        </div>
    )
}

export default Projects