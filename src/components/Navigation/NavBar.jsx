import React, { Component } from "react";
import { navigateTo } from "gatsby-link"
import config from "../../../data/SiteConfig"
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <img onClick={() => navigateTo("/")} className="navbarImage" src={config.siteLogo} alt="" />
        <div className="navbarButtonContainer">
          <button onClick={() => window.location.href=`${config.linkedin}`} className="navbarButton">Linked In</button>
          <button onClick={() => window.location.href=`${config.github}`} className="navbarButton">GitHub</button>
          <button onClick={() => window.location.href=`${config.resume}`} className="navbarButton">Resume</button>
        </div>
      </div>
    );
  }
}

export default Navigation;


