import React from 'react'
import { endpoint } from "../api";

// material-ui components
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

// Github logo SVG component
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

export default Home;