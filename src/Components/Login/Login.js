import React, { Component } from 'react'
import "./Login.css";

//customer@spacesense.com
//customer

//designer@spacesense.com
//designer

export default class Login extends Component {

  handleSubmit = (e) =>{
      e.preventDefault();
  }  

  handleClick = (route) => {

    this.props.onRouteChange(route);
  }

  render() {
    return (
        <div>
        <form style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
        }} onSubmit={this.handleSubmit}>
            <div className="flex_form"> 
                <h2 className="login_heading">LOGIN</h2>
                <br/>
                <br/>
                <label for="email">Email</label>
                <input className="input_type_login" type="text" id="email" name="lemail" placeholder="Email" />
                <label for="pass">Password</label>
                <input className="input_type_login" type="text" id="pass" name="lpass" placeholder="Password" />
                <br/>
                <br/>
                <br/>
                <button onClick={() => this.handleClick("customer")} className="button_submit">LogIn as Customer</button>
                <button onClick={() => this.handleClick("designer")} className="button_submit">LogIn as Designer</button>
            </div>
        </form>
        </div>
        
    )
  }
}
