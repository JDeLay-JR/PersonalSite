import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import NavBar from "../components/Navigation/NavBar"
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <NavBar />
        <About />
      </div>
    );
  }
}

export default AboutPage;
