import React, { Component } from "react";
// import Link from "gatsby-link";
import "./Navigation.css";
import MenuButton from "../MenuButton/MenuButton";

class Navigation extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <MenuButton />
      </div>
    );
  }
}

export default Navigation;
