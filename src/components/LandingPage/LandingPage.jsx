import React, { Component } from "react";
// import headshot from "../../../public/images/Headshot.jpg"
import MainContent from "../../layouts/MainContent/MainContent"
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
      
      <MainContent>
        <div className="landingPageContainer">
          <div className="aboutMe">
            <p >About Me</p>
          </div>
          <div className="projectsAndBlog">
            <p>Projects and Tech Blog</p>
          </div>
        </div>
      </MainContent>
      
    );
  }
}

export default LandingPage;
