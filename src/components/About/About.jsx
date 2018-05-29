import React, { Component } from "react";
import "./About.css";
import headshot from '../../../static/images/Headshot.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <div className="about gridContainer">
          <img src={headshot} className='headshot' alt='James DeLay' />
          <div className="aboutHeader flexContainer">
            <h1 className="flexItem">James DeLay</h1>
            <h3 className="flexItem">Fullstack Software Engineer</h3>
          <p>
            While I was pursuing my MBA at Adelphi University I was working as a carpenter. I quickly realized that I loved to build and create things as well as come up with innovative solutions for complex problems. I decided to combine this creative passion with my other passion: technology. This led me to The Fullstack Academy of Code where I studied software engineering & web development. I am extremely fascinated by front end development. I love creating dynamic and interactive webpages and designing UI and UX.
          </p>
          <p>
            Technical Skills: JavaScript, Node, Express, Sequelize, React, Redux, Git, Github, HTML, React Native, PostgreSQL, Mocha, Jasmine, Chai, Bootstrap, Socket.io, Google Firebase, Twillio, CSS
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
