import React from "react";

export default function Info() {

    function email() {
        navigator.clipboard.writeText("marcuslee145@gmail.com").then(() => {alert("email copied to clipboard!");})
    }

    return (
        <header>           
            <img className="profilePic" src="./images/profilePic.jpg" alt="profile"/>
             <h2 className="name">Marcus Lee</h2>
            <p className="role">Software Developer Student</p>
            <div className="icons">
                <div className="github">
                    <a href="https://github.com/MarcusLee145" target="_blank"><img className="githubIcon" src="./images/github.png" alt="Github" /></a>
                </div>
                <div className="email">
                    <img onClick={email} className="emailIcon" src="./images/emailIcon.png" alt="email" />
                </div>
                <div className="linkdn">
                    <a href="https://www.linkedin.com/in/marcus-lee145/" target="_blank"><img className="linkdnIcon" src="./images/linkdnLogo.png" alt="linkdn-Logo" /></a>
                </div>
            </div>            
        </header>
    )
}