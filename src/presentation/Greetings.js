import React from 'react'
import { endpoint } from "../data/api";

// material-ui components
// import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

// Github logo SVG component
import GithubIcon from "./GithubIcon";

// If user is not logged in, display GuestGreeting with signin button
const GuestGreeting = () => (
  <Paper>
    <Button variant="contained" className="button" color="default" size="large">
      <GithubIcon/> 
      <a href={`${endpoint}/signin`}>Sign in with Github</a>
    </Button>
  </Paper>
);

// Conditional flow to determine what greetings to render
export const Greeting = ({user}) => {
  const isLoggedIn = user.userName;
  if (isLoggedIn){
    return <strong>Welcome back, {user.userName.split(' ')[0]}</strong>
  }
  return <GuestGreeting />
};