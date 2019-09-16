import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './comps/Validator';
import Char from './comps/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  userInputHandler = (e) => {
    this.setState({ userInput: e.target.value });
  }

  deleteChar = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char charac={ch} key={index} remover={() => this.deleteChar(index)} />
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Type text + click on output to delete letters</h2>
        </div>
        <div className="App-intro">
          <input type="text"
            onChange={this.userInputHandler}
            placeholder={this.state.userInput} />
        </div>
        <div>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
        </div>
        <div>
          <p>{charList}</p>
        </div>
      </div>
    );
  }
}

export default App;
