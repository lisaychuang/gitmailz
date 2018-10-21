import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getUserFavRepos, getUserInfo } from "../data/requests";

// material-ui components
import Grid from "@material-ui/core/Grid";

// Child components
import Sidebar from "../Sidebar";
import Home from "../presentation/Home";
import Account from "../presentation/Account";
import Notifications from "./NotificationsContainer";

export default class RouterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      userName: "",
      githubUsername: "",
      userFavRepos: ""
    };
  }

  componentDidMount() {
    getUserInfo()
      .then(result => {
        // if result is null, the user is not logged in (i.e. fetch result === null)
        if (!result) {
          this.setState({
            isLoaded: true
          });
          return;
        }
        // User is logged in, let's ask for favorite repos
        // Use Promise.all to resolve Promises in parallel  
        // pass in result from the first call (getUserInfo) as well
        return Promise.all([result, getUserFavRepos()]);
      })
      .then(([result, favRepos]) => {
        // else set user information per below
        this.setState({
          isLoaded: true,
          userName: result.name,
          githubUsername: result.username,
          userFavRepos: favRepos
        });
      })
      // Catch error if the API response never came, e.g. if user is offline or request timed out
      .catch(
        error => {
          window.alert("Current user request never came back");
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  onInputChange = (evt) => {
    this.setState({
      userFavRepos: evt.target.value
    })
}

  render() {
    const { error, isLoaded, userFavRepos, ...user } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;

      // render loading message
    } else if (!isLoaded) {
      return <div>Loading homepage...</div>;

      // render table of notification results
    } else {
      return (
        <div>
          <Router>
            <Grid container spacing={24}>
              <Grid item xs={2} className="sidebar">
                <Sidebar />
              </Grid>

              <Grid item xs={10} className="body">
                <Route
                  exact
                  path="/"
                  render={props => <Home {...props} userInfo={user} />}
                />
                <Route path="/account" 
                render={props => <Account {...props} userFavRepos={userFavRepos} onInputChange={this.onInputChange} />} />
                <Route path="/notifications" component={Notifications} />
              </Grid>
            </Grid>
          </Router>
        </div>
      );
    }
  }
}
