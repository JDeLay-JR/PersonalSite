import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import MainNav from "../layouts/MainNav/MainNav";
import MenuButton from "../components/MenuButton/MenuButton";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <MainNav config={config}>
          <MenuButton />
          <About />
        </MainNav>
      </div>
    );
  }
}

export default AboutPage;
