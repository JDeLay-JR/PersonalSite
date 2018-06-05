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
          <img src={headshot} className='headshot' alt='James DeLay' />
          <div className="aboutHeader flexContainer">
            <h2 className="flexItem">James DeLay</h2>
            <h3 className="flexItem">Fullstack Software Engineer</h3>
            <p id="about">
              {config.aboutMe}
            </p>
            <p >
              <strong id="skillsBold">Technical Skills:</strong> JavaScript, Node, Express, Sequelize, React, Redux, Git, Github, HTML, React Native, PostgreSQL, Mocha, Jasmine, Chai, Bootstrap, Socket.io, Google Firebase, Twillio, CSS
            </p>
          </div>
        </div>
        <MainContent />
      </div>
      
    );
  }
}

export default About;
