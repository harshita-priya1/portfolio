import './Navbar.css'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="nav">
                <img src={logo} className='logo'/>
                <div className='l'>
                    <a className='l1'>Home</a>
                    <a className='l2'>About Me</a>
                    <a className='l3'>Tech</a>
                    <a className='l4'>Projects</a>
                    <a className='l5'>Socials</a>
                </div>
                <button className='nav-btn'>Contact Me</button>
        </nav>
    )
}

export default Navbar