import React, { Component } from "react";
import Link from 'gatsby-link'
import tinkle from "../../../public/images/tinkle.png"
import scrappr from "../../../public/images/scrappr.png"
import aboutMe from "../../../public/images/about-me.jpg"
import blog from "../../../public/images/blog.png"
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
            <img src={aboutMe} className="img" alt="me" />
          </div>
          <div className="landingPageComponent">
            <Link to='/tinkle'><img src={tinkle} className="img" alt="tinkle" /></Link>
          </div>
          <div className="landingPageComponent">
            <p>Project: SBM</p>
          </div>
          <div className="landingPageComponent">
            <img src={blog} className="img" alt="blog" />
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
