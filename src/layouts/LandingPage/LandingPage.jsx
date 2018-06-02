import React, { Component } from "react";
import MainContent from "../../layouts/MainContent/MainContent"
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
      
      <MainContent>
        <div className="landingPageContainer">
          <div id="tinkle" className="landingPageComponent">
            Tinkle
          </div>
          <div id="sbm" className="landingPageComponent">
            SBM
          </div>
          <div id="scrappr" className="landingPageComponent">
            Scrappr
          </div>
        </div>
      </MainContent>
      
    );
  }
}

export default LandingPage;
