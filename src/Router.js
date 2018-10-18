import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { endpoint } from './api';
import Notifications from './Notifications'
import ListItemComposition from './Sidebar'
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import GithubIcon from "./GithubIcon";


const Home = () => (
    <Grid item xs={10} className="body">
      <Paper>
        <p>Gitmail is a Github notification dashboard that's intuitive, efficient, and useful. </p>
        

        <Button variant="contained" className="button" color="default" size="large">
          <GithubIcon/> 
          <a href={`${endpoint}/signin`}>Sign in with Github</a>
        </Button>
      </Paper>
    </Grid>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Account = () => (
  <div>
    <h2>Account information</h2>
    <p>You have signed in successfully</p>
  </div>
)

const Menu = () => (
  <Router>
    <Grid container spacing={24}>
      <Grid item xs={2} className="sidebar">
        <ListItemComposition />
      </Grid>

      <Grid item xs={10} className="body">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/notifications" component={Notifications} />
      </Grid>

    </Grid>
  </Router>
);

export default Menu;