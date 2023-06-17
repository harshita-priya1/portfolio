import "./Projects.css"
import React, { useState } from 'react';
import soilApp from "../assets/project-icons/soilApp.png"
import trafficSign from "../assets/project-icons/trafficSign.png"
import concrete from "../assets/project-icons/concrete.png"
import weather from "../assets/project-icons/weather.png"


const projects = [
    {
      name: 'The Soil App',
      description: 'A cross-platform application to act as an AI assistant for soil engineers and for soil identification.',
      additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: soilApp, // is this the right way to do this?
      projectUrl: 'https://example.com/project1',
    },
    {
      name: 'Traffic Sign Recognition',
      description: 'A CNN model for Traffic Sign Recognition.',
      additionalInfo: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageUrl: trafficSign,
      projectUrl: 'https://example.com/project2',
    },
    {
      name: 'Concrete Strength Prediction',
      description: 'Using multiple machine learning models to predict concrete strength and to compare their accuracies.',
      additionalInfo: 'Aenean euismod odio at sapien convallis, sed scelerisque diam tincidunt.',
      imageUrl: concrete,
      projectUrl: 'https://example.com/project3',
    },
    {
      name: 'React Weather App',
      description: 'A simple weather app built with React.',
      additionalInfo: 'Aenean euismod odio at sapien convallis, sed scelerisque diam tincidunt.',
      imageUrl: weather,
      projectUrl: 'https://example.com/project3',
    },
  ];
  


const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const handleViewProject = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

    const currentProject = projects[currentProjectIndex];

    return(
        <div className="project">
            <div className="project-left">
                <div className="project-desc">
                    <div className="project-title">{currentProject.name}
                    </div>
                    <p className="project-text">{currentProject.description}</p>
                    <button className="project-btn" onClick={handleViewProject}>View Project →</button>
                    <div className="arrow-button">
                        <button onClick={handlePreviousProject} className="arrow-left">⇦</button>
                        <button onClick={handleNextProject} className="arrow-right">⇨</button>
                    </div>
                </div>
            </div>
            <div className="project-right">
                <img src={currentProject.imageUrl} alt={currentProject.name} className="project-img"></img>
            </div>

            {showModal && (
            <div className="modal">
            <div className="modal-content">
                <div className="project-details">
                    <h2>{currentProject.name}</h2>
                    <p>{currentProject.additionalInfo}</p>
                </div>
                <div className="modal-buttons">
                    <a className="view-button" href={currentProject.projectUrl} target="_blank" rel="noopener noreferrer">
                        Github Link
                    </a>
                    <button className="close-button" onClick={handleCloseModal}>
                    Close
                    </button>
                </div>
            </div>
            </div>
        )}
        </div>
    )
}

export default Projects