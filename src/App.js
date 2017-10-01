import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      date: new Date(),
    };
  }

  //When the component renders, do this.
  componentDidMount() {
    this.timerID = setInterval(()=> this.tick(), 1000);
  }

  //When the DOM produced by Clock is removed, clear that timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //Sets the new state, gives a new date instead of changing the old one for
  //pure Component, but keeps the rest of the state the same
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <Clock name="Aaron"/>
        </p>
      </div>
    );
  }
}

//
export default App;
