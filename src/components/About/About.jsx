import React, { Component } from "react";
import "./About.css";
import config from "../../../data/SiteConfig"
import headshot from "../../../public/images/Headshot.jpg"
import MainContent from "../../layouts/MainContent/MainContent"

class About extends Component {
  render() {
    return (
      <div className="about gridContainer">
        <MainContent />
        <div className="about gridContainer">
          <div id='header'>
            <h1 className="flexItem">James DeLay</h1>
            <h2 className="flexItem">Full Stack Software Engineer</h2>
          </div>
          <div className="headshot">
            <img src={headshot} id='headshot' alt='James DeLay' />
          </div>
          <div className="aboutHeader flexContainer">
            <p id="about">
              {config.aboutMe}
            </p>
            <p>
              <strong id="skillsBold">Technical Skills:</strong> JavaScript, Node.js, Express.js, Sequelize.js, React, React Native, Redux, Git, Github, HTML, PostgreSQL, Mocha, Jasmine, Chai, Socket.io, Google Firebase, Twilio, CSS
            </p>
            <div className="flexRow">
              <p><strong>Email:</strong> jdelay.jr@gmail.com</p>
              <p><strong>Phone:</strong> 516-458-0715</p>
            </div>
          </div>
        </div>
        <MainContent />
      </div>
      
    );
  }
}

export default About;
