import React, { Component } from "react";
import MainContent from "../../layouts/MainContent/MainContent"
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
      
      <MainContent>
        <div className="landingPageContainer">
          <div className="landingPageSubContainer">
            <div id="personalSite" className="landingPageComponent">
              Personal Site
            </div>
            <div id="aboutMe" className="landingPageComponent">
              About Me
            </div>
            <div id="tinkle" className="landingPageComponent">
              Tinkle
            </div>
            <div id="sbm" className="landingPageComponent">
              SBM
            </div>
            <div id="blog" className="landingPageComponent">
              Blog
            </div>
            <div id="scrappr" className="landingPageComponent">
              Scrappr
            </div>
          </div>
        </div>
      </MainContent>
      
    );
  }
}

export default LandingPage;
