import React, { Component } from "react";
import MainContent from "../../layouts/MainContent/MainContent"
import config from "../../../data/SiteConfig"
import tinkle from "../../../public/images/tinkle.png"
import scrappr from "../../../public/images/scrappr.png"
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    const navigate = target => {
      window.location.href = target
    }

    return (  
      <MainContent>
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
      </MainContent>
      
    );
  }
}

export default LandingPage;

// <div class="container">
// <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
// <p class="title">card title</p>
// <div class="overlay"></div>
// <div class="button"><a href="#"> BUTTON </a></div>
// </div>