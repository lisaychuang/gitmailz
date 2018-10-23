import React from "react";

import { connect } from "react-redux";
import * as actions from "../actions/dataActions";

// material-ui components
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

import {Greeting} from "../presentation/Greetings";

class Homepage extends React.Component {

  componentDidMount() {
    // invoke action function
    // dispatch "LOAD_DATA" action to kick off async web request
    // fetch user's favorite repo input from Rails API
    this.props.loadUser();
  }

  render() {
    // debugger;
    const { error, isLoaded, ...userInfo } = this.props;
    // render error message
    if (error) {
      return <div>Error: {error.message}</div>;

    // render loading message
    } else if (!isLoaded) {
      return <div>Loading notifications...</div>;

    // render table of notification results
    } else {
      debugger;
      return (
        <Grid item xs={10} className="body">
            <Paper>
                <p>Gitmail is a Github notification dashboard that's intuitive, efficient, and useful. </p>

                <Greeting user={userInfo} />
            </Paper>
        </Grid>
      );
    }
  }
}

// connect HomepageContainer to store 
// receive state and actions as props

export default connect(
  state => state.gitmail,
  actions
)(Homepage);