import "./Projects.css"
import React, { useState } from 'react';
import soilApp from "../assets/project-icons/soilApp.png"
import trafficSign from "../assets/project-icons/trafficSign.png"
import concrete from "../assets/project-icons/concrete.png"
import weather from "../assets/project-icons/weather.png"
import portfolio from "../assets/project-icons/portfolioImg.png"


const projects = [
    {
      name: 'The Soil App',
      description: 'A cross-platform application to act as an AI assistant for soil engineers and for soil identification.',
      additionalInfo: "The soil app intends to make the knowledge gained from years of research available in the hands of common people. People who deal with soil each and every day but don't have enough knowledge to make the most out of it. \nFeatures: \n 1. Soil Identification, using ML models, from an image \n 2. Geotracking \n3. AI integration to answer soil related queries of the user \nTechnologies used: Flutter, Node.js, Express.js, MongoDB, Flask, Python, Tensorflow, OpenAI's GPT-3 ",
      imageUrl: soilApp, 
      projectUrl: 'https://example.com/project1',
    },
    {
      name: 'Traffic Sign Recognition',
      description: 'A CNN model for Traffic Sign Recognition.',
      additionalInfo: 'A CNN Model was used. The model was trained on the German Traffic Sign Recognition Benchmark (GTSRB) dataset. It was trained on 43 different classes of traffic signs. It was trained on 80% of the dataset and tested on the remaining 20%. The model achieved an accuracy of 97% on the test set.',
      imageUrl: trafficSign,
      projectUrl: 'https://github.com/harshita-priya1/traffic_sign_recognition',
    },
    {
      name: 'Concrete Strength Prediction',
      description: 'Using multiple machine learning models to predict concrete strength and to compare their accuracies.',
      additionalInfo: 'The strength of concrete was analyzed based on 8 parameters or constituents for which linear regression model, decision tree regression, CatBoost regression, and Artificial Neural Networks were used. The dataset was taken from the UCI website . The CatBoost regression turned out to be the best.',
      imageUrl: concrete,
      projectUrl: 'https://example.com/project3',
    },
    {
      name: 'React Weather App',
      description: 'A simple weather app built with React.',
      additionalInfo: 'A weather app built with React that uses the OpenWeatherMap API to fetch weather data. It displays the current weather and the weather forecast for the next 5 days for the city selected by the user.',
      imageUrl: weather,
      projectUrl: 'https://github.com/harshita-priya1/weather-app',
    },
    {
      name: 'My Portfolio',
      description: 'Built with React.',
      additionalInfo: 'This one itself!',
      imageUrl: portfolio,
      projectUrl: 'https://github.com/harshita-priya1/portfolio',
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