//import logo from './logo.svg';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import general from './components/generalinfo'
import './App.css';
import GeneralInfo from './components/generalinfo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GeneralInfo/>
    )
  }
}

export default App;
