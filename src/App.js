import React, { Component } from 'react';
import Router from './Router';
import PrimarySearchAppBar from './AppBar';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notifications: []
  //   };
  // }

  // handleOnClick = event => {
  //   // // Handle Form Submit event default
  //   // // Create quote object from state
  //   // // Pass quote object to action creator
    
  //   event.preventDefault();
  //   // fetch("https://api.example.com/items")
  //   //   .then(res => res.json())
  //   //   .then(
  //   //     (result) => {
  //   //       this.setState({
  //   //         isLoaded: true,
  //   //         items: result.items
  //   //       });
  //   //     },
  //   //     // Note: it's important to handle errors here
  //   //     // instead of a catch() block so that we don't swallow
  //   //     // exceptions from actual bugs in components.
  //   //     (error) => {
  //   //       this.setState({
  //   //         isLoaded: true,
  //   //         error
  //   //       });
  //   //     }
  //   //   )
  // }
  
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} className="header">
            <PrimarySearchAppBar></PrimarySearchAppBar>
          </Grid>

          <Grid item xs={12} className="router">
            <Router />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
