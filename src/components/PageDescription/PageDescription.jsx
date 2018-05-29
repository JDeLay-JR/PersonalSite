import React from "react";
import "./PageDescription.css";
import Typist from 'react-typist';


class PageDescription extends React.Component {
  render() {
      return (
        <Typist className="page-description" cursor={{ show: false }}>
          <h2 className="page-description">Full Stack Software Engineer</h2>
        </Typist>
      )
  }
}

export default PageDescription;
