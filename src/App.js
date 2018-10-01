import React, { Component } from 'react';
import logo from './logo.png';
import Router from './Router';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  handleOnClick = event => {
    // // Handle Form Submit event default
    // // Create quote object from state
    // // Pass quote object to action creator
    
    event.preventDefault();
    // fetch("https://api.example.com/items")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.items
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Gitmailz</h1>
        </header>
        <Router />
      </div>
    );
  }
}

export default App;