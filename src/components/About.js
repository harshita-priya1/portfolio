import img from "../assets/myImg.jpg"
import "./About.css"


const About = () => {
    return(
        <div className="about">
            <img src={img} className='image'/>
            <div className="text">
                <h1>About Me</h1>
                <h3>I'm a final year undergrad student.</h3>
            </div>
        </div>
    )
}

export default About