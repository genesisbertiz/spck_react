import React from 'react';
import ReactDOM from 'react-dom';
//import { SocketClient } from 'socket.io-client';
import * as io from 'socket.io-client';
import { useDrag } from 'use-react-gesture';
import { Spring } from 'react-spring';

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
    console.log(useDrag, Spring)
    const socket = io.connect('http://localhost:5000')
    socket.on('connection', () => console.log('connected'))
    /*const socket = new SocketClient("http://127.0.0.1:5000").open()
    /socket.on("connect", (request) => {
        console.log('connected')
         request.sendMessage("message")
    })
     socket.on("socketReady", (request) => {
        console.log('connected 2')
         request.sendMessage("message")
    })*/
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
