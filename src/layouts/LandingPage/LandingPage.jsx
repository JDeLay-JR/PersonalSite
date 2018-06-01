import React, { Component } from "react";
import tinkle from "../../../public/images/tinkle.png"
import scrappr from "../../../public/images/scrappr.png"
import config from "../../../data/SiteConfig"
import MainContent from "../../layouts/MainContent/MainContent"
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
      
      <MainContent>
        <div className="landingPageContainer">
          <div className="landingPageComponent">
            <img src={config.siteCover} className="img" alt="logo" />
          </div>
          <div className="landingPageComponent">
            <p>About Me</p>
          </div>
          <div className="landingPageComponent">
            <img src={tinkle} className="img" alt="tinkle" />
          </div>
          <div className="landingPageComponent">
            <p>Project: SBM</p>
          </div>
          <div className="landingPageComponent">
            <p>Tech Blog</p>
          </div>
          <div className="landingPageComponent">
            <img src={scrappr} className="img" alt="scrappr" />
          </div>
        </div>
      </MainContent>
      
    );
  }
}

export default LandingPage;
