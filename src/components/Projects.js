import "./Projects.css"


const Projects = () => {
    return(
        <div className="project">
            <div className="project-left">
                <div className="project-desc">
                    <div className="project-title">
                        Project Title
                    </div>
                    <p className="project-text">A short description of the project</p>
                    <button className="project-btn">View Project →</button>
                    <div className="arrow-button">
                        <button className="arrow-left">⇦</button>
                        <button className="arrow-right">⇨</button>
                    </div>
                </div>
            </div>
            <div className="project-right">
            </div>
        </div>
    )
}

export default Projects