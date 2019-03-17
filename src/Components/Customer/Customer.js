import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
export default class Customer extends Component {

  state= {
      questions : [],
      responses : []
  }

  componentDidMount (){
    let question = JSON.parse(localStorage.getItem("questions"));
    let response = JSON.parse(localStorage.getItem("responses"));
    this.setState({
        questions:question,
        responses:response
    })
  }

  render() {
    return (
      <div>
        <div className="flex_report_adj">
              <h2>Recommendations</h2>
              <h2 className="logout_adj" onClick={() => this.props.onRouteChange("home")}>Logout</h2>
          </div>
        <Comment.Group style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
    <Header as='h3' dividing>
      Comments
    </Header>
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>You</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>I would like to have a modular kitchen. But I am stuck at styling it.</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Designer1</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>I have many designs that meet your requirements.</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Designer2</Comment.Author>
            <Comment.Metadata>
              <div>1 day ago</div>
            </Comment.Metadata>
            <Comment.Text>Can you please upload a photo of the space that you woould like to customize</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
      </div>
    )
  }
}
