import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import User from './User'
import Clock from './Clock'
import Toggle from './Toggle'
import Login from './Login'

const comment = {
  text: 'I hope you enjoy learning React!',
  author: {
    firstname: 'John',
    lastname: 'Doe',
  },
}


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Login />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <Toggle />
        <Clock />
        <User text={comment.text} author={comment.author}/>

      </div>
    );
  }
}

export default App;
