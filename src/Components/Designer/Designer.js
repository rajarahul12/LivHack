import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import "./Designer.css";
export default class Designer extends Component {
  render() {
    return (
      <div>
      <div className="flex_report_adj_end">
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
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Customer1</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I need someone to design interior of my bedroom.</Comment.Text>
        {/* <Comment.Actions>
          <Comment.Action active>Reply</Comment.Action>
        </Comment.Actions> */}
        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Customer2</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>Can I know how many days would it take to get my furniture delivered</Comment.Text>
        {/* <Comment.Actions>
          <Comment.Action active>Reply</Comment.Action>
        </Comment.Actions> */}
        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>
      </div>
    )
  }
}
