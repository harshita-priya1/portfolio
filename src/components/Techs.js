import "./Techs.css"
import front from "../assets/front-end.png"
import back from "../assets/back-end.png"
import appdev from "../assets/app-dev.png"
import ml from "../assets/ml.png"



const Techs = () => {
    return(
        <div className="tech">
            <div className="tech-content">
                <div className="tech-title"><b>Skills</b></div>
                <div className="tech-skills">
                    <div className="techs">
                        <img src={front} className="image"></img>
                        <div>Front-end Development</div>
                        <p>HTML, CSS, JAVASCRIPT, React JS</p>
                    </div>
                    <div className="techs">
                        <img src={back} className="image"></img>
                        <div>Back-end Development</div>
                        <p>Node JS, Express JS</p>
                    </div>
                    <div className="techs">
                        <img src={appdev} className="image"></img>
                        <div>App Development</div>
                        <p>Flutter</p>
                    </div>
                    <div className="techs">
                        <img src={ml} className="image"></img>
                        <div>  Machine Learning</div>
                        <p>Python, TensorFlow, Pandas, OpenCV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techs


// import htmll from "../assets/skillicons/html.png"
// import cssl from "../assets/skillicons/css.png"
// import jsl from "../assets/skillicons/javascript.png"
// import rl from "../assets/skillicons/react.png"
// import fl from "../assets/skillicons/flutter.png"
// import njl from "../assets/skillicons/node.png"
// import ejl from "../assets/skillicons/express.png"
// import msl from "../assets/skillicons/mysql.png"
// import mdl from "../assets/skillicons/mongo.png"
// import cl from "../assets/skillicons/cl.png"
// import cppl from "../assets/skillicons/cppl.png"
// import pyl from "../assets/skillicons/python.png"
// import ghl from "../assets/skillicons/git.png"
{/* <h1 className="ltt">Skills</h1>
            <div className="tcontent">
                <div className="skills">
                    <img src={htmll} className="l1 ic" alt="HTML"/>
                    <img src={cssl} className="l2 ic" alt="CSS"/>
                    <img src={jsl} className="l3 ic" alt="JAVASCRIPT"/>
                    <img src={rl} className="l4 ic" alt="REACT JS"/>
                    <img src={fl} className="l5 ic" alt="FLUTTER"/>
                    <img src={njl} className="l6 ic" alt="NODE JS"/>
                    <img src={ejl} className="l7 ic" alt="EXPRESS JS"/>
                    <img src={msl} className="l8 ic" alt="MYSQL"/>
                    <img src={mdl} className="l9 ic" alt="MONGO DB"/>
                    <img src={cl} className="l10 ic" alt="C"/>
                    <img src={cppl} className="l11 ic" alt="C++"/>
                    <img src={pyl} className="l12 ic" alt="PYTHON"/>
                    <img src={ghl} className="l13 ic" alt="GIT"/>
                </div>
                <h3 className="stt">And many more to come...!</h3>
            </div> */}