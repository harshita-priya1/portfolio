import "./Contacts.css"
import LinkedIn from  "../assets/linkedin.png"
import Twitter from  "../assets/Twitter.png"
import Github from  "../assets/github.png"
import Insta from  "../assets/instagram.png"
import Gmail from  "../assets/gmail.png"




const Contacts = () => {
    return(
        <div className="contact">
            <div className="contact-content">
                <div className="contact-left">
                    <div className="c1">Let's Connect!</div>
                    <div className="mail">
                        <div className="c2"><bold>My Email</bold></div>
                        <div className="c2">harshita.priya.dev@gmail.com</div>
                    </div>
                    <div className="socials">
                        <div className="c2"><bold>My Socials</bold></div>
                        <div className="contact-icons">
                            <img onClick={() =>(window.location.href = "https://www.linkedin.com/in/harshita-priya-192955212")} src={LinkedIn} alt="LinkedIn"></img>
                            {/* <img src={Twitter} alt="Twitter"></img> */}
                            {/* <img src={Insta} alt="Instagram"></img> */}
                            <img onClick={() =>(window.location.href = "https://github.com/harshita-priya1")} src={Github} alt="Github"></img>
                            <a href="mailto:harshita.priya.dev@gmail.com"><img src={Gmail} alt="Gmail"></img></a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    {/* <div className="c1">Contact Me</div>
                    <form className="contact-form">
                        <input type="text" placeholder="Full Name"></input>
                        <input type="text" placeholder="Email Address"></input>
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default Contacts

{/* <div className="text">Let's connect!</div>
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
            </div>         */}