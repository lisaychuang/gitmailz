import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// material-ui components
import Grid from "@material-ui/core/Grid";

// Child components
import Notifications from "./NotificationsContainer";
import Account from "./AccountContainer";
import Sidebar from "./Sidebar";
import Home from "./presentation/Home";

export default class RouterLayout extends Component {
  render() {
    return (
      <div>
        <Router>
          <Grid container spacing={24}>
            <Grid item xs={2} className="sidebar">
              <Sidebar />
            </Grid>

            <Grid item xs={10} className="body">
              <Route exact path="/" component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/notifications" component={Notifications} />
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}