import './Home.css'
// import logo from "../assets/logo.png"
import sideImg from "../assets/sideImg.jpg"


const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <div className="left">
                    <h1 className='lth'>Hello! ♡</h1>
                    <h3>Welcome to my portfolio page...</h3>
                </div>
                <div className="right">
                    <img src={sideImg} className='sideImg' alt='Mainimage'/>
                    {/* <img src={glowCircle} className='glowCircle' alt='glow circle'/> */}
                    {/* <h3 className='tr1'>Harshita Priya</h3> */}
                </div>
            </div>
        </div>
    )
}

export default Home;