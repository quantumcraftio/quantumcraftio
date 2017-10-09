import React, { Component } from "react";
import logo from "./company_logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <img alt="Quantum Craft Logo" className="company-logo" src={logo} />
          <div className="qc-text">quantum craft</div>
          <div className="coming-soon">coming soon</div>
          <div className="meantime">
            In the meantime, check out our first app <a href="http://www.eventbadger.io">here</a>.
          </div>
        </div>
        <div className="copyright">©2017 Quantum Craft UG (haftungsbeschränkt)</div>
      </div>
    );
  }
}

export default App;
