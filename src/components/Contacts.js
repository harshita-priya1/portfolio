import "./Contacts.css"
import LinkedIn from  "../assets/linkedin.png"
import Twitter from  "../assets/Twitter.png"
import Github from  "../assets/github.png"
import Insta from  "../assets/instagram.png"
import Gmail from  "../assets/gmail.png"




const Contacts = () => {
    return(
        <div className="contact">
            <div className="text">Let's connect!</div>
            <div className="icons">
                <img src={LinkedIn} alt="LinkedIn"></img>
                <img src={Twitter} alt="Twitter"></img>
                <img src={Insta} alt="Instagram"></img>
                <img src={Github} alt="Github"></img>
                <img src={Gmail} alt="Gmail"></img>
            </div>
            <div className="msg">
                <div className="text">Interested in working together?</div>
                <div className="button">CONTACT</div>
            </div>        
        </div>
    )
}

export default Contacts