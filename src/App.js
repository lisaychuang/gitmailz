import React, { Component } from 'react';
import RouterLayout from './RouterLayout';
import PrimarySearchAppBar from './AppBar';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} className="header">
            <PrimarySearchAppBar />
          </Grid>

          <Grid item xs={12} className="router">
            <RouterLayout />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
