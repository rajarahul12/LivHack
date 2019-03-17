import React, { Component } from 'react'
import Recommendations from "./Recommendations";
import "./Report.css";

export default class Report extends Component {
  render() {
    var loaded = false;
    const { serverResponses } = this.props;
    const keys = Object.keys(serverResponses);
    const lastKey = keys.pop();
    const lastValue = keys.pop();
    const values = Object.values(serverResponses);
    
        return (
          <div>
            <div className="flex_report_adj">
              <h2>Recommendations</h2>
              <h2 className="logout_adj" onClick={() => this.props.onRouteChange("home")}>Logout</h2>
            </div>
            <Recommendations lastKey={lastKey} lastValue={lastValue} />
          </div>
        )
  }
}
