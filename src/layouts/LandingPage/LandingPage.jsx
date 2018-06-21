import React, { Component } from "react";
import config from "../../../data/SiteConfig"
import tinkle from "../../../static/images/tinkle.png"
import scrappr from "../../../static/images/scrappr.png"
import SBM from "../../../static/images/SBM.png"
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    const navigate = target => {
      window.location.href = target
    }

    return (  
      <div>
        <center><h1 id='header'>Portfolio</h1></center>
        <div className="landingPageContainer">
          <div id="tinkle" className="landingPageComponent">
            <img id="tinkleImg" src={tinkle} alt="tinkle" />
            <div className="overlay" />
            <div className="buttonContainer">
              <button onClick={() => navigate(config.tinkleSite)}>View the Code</button>
              <button onClick={() => navigate(config.tinkleSite)}>Project Description</button>
            </div>
          </div>
          <div id="sbm" className="landingPageComponent">
            <img id="sbmImg" src={SBM} alt="sbm" />
            <div className="overlay" />
            <div className="buttonContainer">
              <button onClick={() => navigate(config.sbmSite)}>View the Code</button>
              <button onClick={() => navigate(config.tinkleSite)}>Project Description</button>
            </div>
          </div>
          <div id="scrappr" className="landingPageComponent">
            <img id="scrapprImg" src={scrappr} alt="scrappr" />
            <div className="overlay" />
            <div className="buttonContainer">
              <button onClick={() => navigate(config.scrapprSite)}>View the Code</button>
              <button onClick={() => navigate(config.tinkleSite)}>Project Description</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
