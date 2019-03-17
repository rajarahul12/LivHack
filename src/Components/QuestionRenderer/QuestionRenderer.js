import React, { Component } from 'react'
// import Center from 'react-center';
import "./QuestionRenderer.css";

export default class QuestionRenderer extends Component {

  state = {
    clicked : false,
    optionClicked : ""
  }

  updateState = () => {
    this.setState({
      clicked:false,
      optionClicked : ""
    })
  }

  handleOption = (option) =>{
    this.setState({
      clicked : true,
      optionClicked:option,
      presentClass: "added_class"
    })
    this.props.storeInState(option);
  }

  render(){
    return(
      <div className="anim">
        {this.props.question.map((option,index) => {
          if(index >= 2){
            var clicked = this.state.clicked;
            var optionClicked = this.state.optionClicked;
            return  <h3 key={index} onClick={()=>this.handleOption(option)} className="style_question">{option+" "}{(clicked && optionClicked===option) ? <i className="fas fa-check"></i> : ""}</h3>
            
          }
        })}
      </div>
    )
  }
}
