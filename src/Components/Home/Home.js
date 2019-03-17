import React, { Component } from 'react'
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <video autoPlay loop muted id="myVideo">
          <source src={require("./6.mp4")} type="video/mp4" />
        </video>
      </div>
    )
  }
}
