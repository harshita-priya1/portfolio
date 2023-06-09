import img from "../assets/myImg.jpg"
import "./About.css"


const About = () => {
    return(
        <div className="about">
            <div className="img-con">
                <img src={img} className='image'/>
            </div>
            <div className="text">
                <h1 className="ltext">About Me</h1>
                <h3 className="stext">I'm a final year undergrad student.</h3>
            </div>
        </div>
    )
}

export default About