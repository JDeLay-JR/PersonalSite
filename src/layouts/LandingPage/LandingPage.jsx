import React, { Component } from "react";
import MainContent from "../../layouts/MainContent/MainContent"
import tinkle from "../../../public/images/tinkle.png"
import scrappr from "../../../public/images/scrappr.png"
import "./LandingPage.css"

class LandingPage extends Component {
  render() {

    // Function that takes in a component to display (untoggles hidden)
    const display = name => {
      const elem = document.getElementById(name)
      elem.className.replace("")
    }

    return (
      
      <MainContent>
        <div className="landingPageContainer">
          <div id="tinkle" onClick={() => display('tinkle')} className="landingPageComponent">
            <img id="tinkleImg" src={tinkle} alt="tinkle" />
          </div>
          <div id="sbm" className="landingPageComponent">
            SBM
          </div>
          <div id="scrappr" className="landingPageComponent">
            <img id="scrapprImg" src={scrappr} alt="scrappr" />
          </div>
        </div>
      </MainContent>
      
    );
  }
}

export default LandingPage;
