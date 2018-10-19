import React, { Component } from 'react';
import Router from './Router';
import PrimarySearchAppBar from './AppBar';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  
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
