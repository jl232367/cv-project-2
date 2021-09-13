//import logo from './logo.svg';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import general from './components/generalinfo'
import './App.css';
import GeneralInfo from './components/generalinfo';
import EducationInfo from './components/educationinfo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
      <GeneralInfo/>
      <EducationInfo/>
     </div>
    )
  }
}

export default App;
