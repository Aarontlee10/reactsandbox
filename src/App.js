import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld(props) {
  return (<h1>Hello, {props.name}</h1>); //Components must start with a capital letter
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro"> </p>
        <HelloWorld name="Aaron"/>
      </div>
    );
  }
}


export default App;
