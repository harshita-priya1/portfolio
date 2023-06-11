import './Home.css'
import LinkedIn from  "../assets/linkedin.png"
import Twitter from  "../assets/Twitter.png"
import Github from  "../assets/github.png"
import Insta from  "../assets/instagram.png"
import Gmail from  "../assets/gmail.png"
// import logo from "../assets/logo.png"
// import sideImg from "../assets/sideImg.jpg"


const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <div className='main-text'>
                    <p className='a1'>Hello!</p>
                    <p className='a2' >I'm <strong>Harshita Priya </strong></p>                    
                    <div className='a3'>a Web and App Developer</div>
                    <div className='a4'>
                        <img src={LinkedIn} alt="LinkedIn"></img>
                        <img src={Twitter} alt="Twitter"></img>
                        <img src={Insta} alt="Instagram"></img>
                        <img src={Github} alt="Github"></img>
                        <img src={Gmail} alt="Gmail"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;

{/* <div className="left">
                    <h1 className='lth'>Hello! ♡</h1>
                    <h3>Welcome to my portfolio page...</h3>
                </div>
                <div className="right">
                    <img src={sideImg} className='sideImg' alt='Mainimage'/> */}
                    {/* <img src={glowCircle} className='glowCircle' alt='glow circle'/> */}
                    {/* <h3 className='tr1'>Harshita Priya</h3> */}
                {/* </div> */}