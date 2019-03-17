import React, { Component } from 'react';
import QuestionRenderer from "../QuestionRenderer/QuestionRenderer";
import Center from 'react-center';
import "./Question.css"

const questions = [
        [
            "What is your Marital Status?",
            "options",
            "Unmarried",
            "Married",
            "Widow"
        ],
        [  
            "What is your age?",
            "text"
        ],
        [
            "What is your gender?",
            "options",
            "Male",
            "Female",
            "Unspecified"
        ],
        [
            "Number of Living Rooms you prefer(BHK)?",
            "options",
            "1",
            "2",
            "3",
            "4+"
        ],
        [
            "What are your hobbies?",
            "options",
            "Sports",
            "Reading",
            "Watching",
            "Cooking",
            "Volunteering",
            "Dancing",
            "Singing",
            "Sleeping",
            "Traveling",
            "Acting"
        ],
        [
            "Do you booze?",
            "options",
            "Yes",
            "No"
        ],
        [
            "What is your Annual Income? (In Lakhs: i.e., 1 => 1Lakh)",
            "text"
        ],
        [
            "What is your favourite colour?",
            "options",
            "Red",
            "Pink",
            "Orange",
            "Yellow",
            "Purple",
            "Green",
            "Blue",
            "Brown",
            "White",
            "Grey",
            "Black"
        ],
        [
            "Number of Other Properties you own?",
            "text"
        ],
        [
            "How many hours do you work?",
            "text"
        ],
        [
            "Average Energy consumption at your house?",
            "text"
        ],
        [
            "What kind of music you like?",
            "options",
            "Rock",
            "Pop",
            "Jaaz",
            "Soft",
            "Mettalic",
            "Romantic",
            "Folk",
            "HipHop",
            "Mashups",
            "Cover"
        ],
        [
            "Are you looking for high raise apartment?",
            "options",
            "Yes",
            "No"
        ],
        [
            "Are you a nature lover?",
            "options",
            "Yes",
            "No"
        ],
        [
            "Are you a devotional person?",
            "options",
            "Yes",
            "No"
        ],
        [
            "Do you go on an outing?",
            "options",
            "Yes",
            "No",
            "Not so often"
        ],
        [
            "What kind of texture would you like to have for your furniture?",
            "options",
            "Soft",
            "Silky",
            "Hard",
            "Matte",
            "Fluffy"
        ],
        [
            "Distance from your offie? (In KMS)",
            "text",
        ],
        [
            "What kind of sports do you play?",
            "options",
            "Indoor",
            "Outdoor",
            "Augemented Reality",
            "Virtual Reality"
        ],
        [
            "Average monthly expenses in thousands (i.e., 10 -> 10K)",
            "text"
        ],
        [
            "How many cities have you lived in?",
            "options",
            "1",
            "2",
            "3",
            "4+"
        ],
        [
            "Years of education you have gone through?",
            "text"
        ]
        
]  

const tags = [
    "marital status",
    "age",
    "gender",
    "rooms",
    "hobbies",
    "alcoholic",
    "annual_income",
    "fav_color",
    "other_props",
    "work_hours",
    "avg_energy",
    "genre",
    "high_raise_apt",
    "nature_lover",
    "devotional",
    "outing",
    "texture",
    "office_distance",
    "sports",
    "expenses",
    "other_cities",
    "ed_qualification"
]

const defaultValues = [
    "yes",
    "49",
    "male",
    "2",
    "singing",
    "no",
    "48",
    "orange",
    "2",
    "7",
    "2000",
    "rock",
    "yes",
    "no",
    "yes",
    "yes",
    "silky",
    "5",
    "outdoor",
    "20",
    "2",
    "19"
]


export default class Question extends Component {

  state = {
      number : 0,
      buttonText : "next",
      submit : true,
      inputText : "",
      optionValue : ""
  }

  storeInState = (response) => {
    this.setState({
        optionValue : response
    })
  }

  goNext = () => {
      this.storeValue(this.state.inputText);
      this.storeValue(this.state.optionValue);
      this.setState({
          inputText:"",
          optionValue:""
      })
      if(this.state.number < questions.length-1){
        this.setState({number : this.state.number+1})
      }
      else if ( this.state.number === questions.length-1 ){
          this.setState({
              submit : false
          })
      }
  }

  storeValue = (response) => {
    if(response !== ""){
        let responses;
        if(localStorage.getItem("responses") === null){
            responses = [];
        }else{
            responses = JSON.parse(localStorage.getItem('responses'));
        }
        responses.push(response);
        localStorage.setItem('responses',JSON.stringify(responses));
    }
  }

  handleOnChange = (e) => {
    //   console.log(e.target.value);
      this.setState({inputText: e.target.value})
  }

  handleSubmit = () => {
      this.props.changeLoadingFlag();
      let responses;
      if(localStorage.getItem("responses") === null){
          console.log("You have not answered any questions");
      }
      else{
          responses = JSON.parse(localStorage.getItem("responses"));
      }
      let resLength = responses.length
      while(responses.length<=21){
          responses.push(defaultValues[resLength]);
          resLength++;
      }
      var jsonData = {};
      responses.forEach(function(response,index){
          jsonData[String(tags[index])] = response.toLowerCase();
      })
      console.log((jsonData));
      
      fetch("http://10.2.41.93:2000/userdata",{method:"post",headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify(jsonData)})
      .then((res) => {
         return res.json();
      })
      .then((response) => {
          localStorage.removeItem('responses');
          this.props.serverResponse(response);
          this.props.changeLoadingFlag();
          this.props.onRouteChange("report");
      })
      .catch(err => console.log(err));
  }

//   component

  render() {
    const {number,buttonText} = this.state;
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }} className="questions_adj">
        {/* <img className="img_adj" src={require("./1.jpg")} alt=""/> */}
        <div>
        <p className="font_question">{questions[number][0]}</p>
        {
            questions[number][1] === "options" ? 
            (
                <QuestionRenderer question={questions[number]} storeInState={this.storeInState}  />
            ): (
               <Center>
               <input className="input_type" onChange={this.handleOnChange} type={questions[number][1]} value={this.state.inputText}/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               </Center>
            )
        }
        </div>
        <br/>
        <br/>
        <div className="flex_adjust">
            <div>
                <button onClick={this.goNext} className="example_e">{buttonText}</button>
            </div>
            <div>
                <button className="example_e" onClick={this.handleSubmit}>Submit</button>
            </div>
        </div>
        
        
      </div>
    )
  }

}
