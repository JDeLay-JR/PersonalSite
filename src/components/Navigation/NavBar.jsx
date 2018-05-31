import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig"
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <Link to="/">
          <img className="navbarImage" src={config.siteLogo} alt="" />
        </Link>
        <button className="navbarButton">Button</button>
      </div>
    );
  }
}

export default Navigation;
