import React, { Component } from 'react'
import "./Context.css";
export default class Context extends Component {
handleOnClick = () => {
    this.props.onRouteChange("questions");
}
  render() {
    return (
      <div className="bg_text" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <h1 className="tag_line">Skeptical? Get a design solution right away!</h1>
        <button className="example_e1" onClick={this.handleOnClick}>Explore</button>
      </div>
    )
  }
}
