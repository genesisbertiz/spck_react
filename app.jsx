import React from 'react';
import ReactDOM from 'react-dom';
import * as SocketIOClient from 'socket.io-client';

class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //console.log('pass', SocketIOClient.SocketClient)
    //const socket = SocketIOClient.SocketClient("127.0.0.1:5000");
  }

  render() {
    return  (
      <div className="">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="React" text="Experience is something you get just after you need it."></Main>,
  document.getElementById('react-app')
);
