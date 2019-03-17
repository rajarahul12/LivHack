import React, { Component } from 'react';

import './App.css';
import Home from "./Components/Home/Home";
import Questions from "./Components/Questions/Question";
import Context from "./Components/Context/Context";
import Loading from "./Components/Loading/Loading";
import Report from "./Components/Report/Report";
import Login from "./Components/Login/Login";
import Customer from "./Components/Customer/Customer";
import Designer from "./Components/Designer/Designer";
import 'semantic-ui-css/semantic.min.css';
// import Center from 'react-center';
class App extends Component {
  state = {
    route:"home",
    isLoading : false,
    serverResponses : ""
  }
  onRouteChange = route => {
    this.setState({ route: route });
  };
  changeLoadingFlag = () => {
    this.setState({
      isLoading : !this.state.isLoading
    })
  }
  serverResponse = (response) => {
    this.setState({
      serverResponses:response
    })
  }
  render() {
    const { route,isLoading } = this.state;
    if(isLoading){
      return(
        <div>
          <Loading />
        </div>
      )
    }
    else{
      return (
        <div className="App">
          {
            route === "home" ? (
              <div>
              {/* <Recommendations lastValue={9}/> */}
              <Home />
              <div className="flex_nav">
                <h2 className="logo_adj">SpaceSense</h2> 
                <h2 className="login_adj" onClick={() => this.onRouteChange("login")} onRouteChange={this.onRouteChange}>Login</h2>
              </div>
              <Context onRouteChange={this.onRouteChange} />
              </div>
            ) : (
              route === "questions" ? (
                <div>
                
                <Questions onRouteChange={this.onRouteChange} changeLoadingFlag={this.changeLoadingFlag} serverResponse={this.serverResponse} />
                </div>
              ) : (
                route === "report" ? (
                  <Report onRouteChange={this.onRouteChange} serverResponses={this.state.serverResponses} />
                  ) :(
                    route === "login" ? (
                      <Login onRouteChange={this.onRouteChange} />
                    ) : (
                      route === "customer" ? (
                        <Customer onRouteChange={this.onRouteChange} />
                      ) : (
                        route === "designer" ? (
                          <Designer onRouteChange={this.onRouteChange} />
                        ) : (
                          ""
                        )
                      )
                    )
                  )
                )
              )
          }
        </div>
      );
    }
  }
}

export default App;
