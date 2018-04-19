import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
    this.state = {
      name: ""
    }
  }

  handleName(e) {
    this.setState({
     name: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleName} />
        <br />
        <welcome-aboard-html-import name={this.state.name}></welcome-aboard-html-import>
      </div>
    );
  }
}

export default App;
