import React from "react";

import { connect } from "react-redux";
import * as actions from "../actions/dataActions";
import DataTable from '../presentation/Datatable'

class Notifications extends React.Component {

  componentDidMount() {
    // invoke action function
    // dispatch "LOAD_NOTIFICATIONS" action to kick off async web request
    // fetch list of user's notifications from Rails API
    this.props.loadNotifications();
  }

  render() {
    const { error, isLoaded, notifications } = this.props;
    // render error message
    if (error) {
      return <div>Error: {error.message}</div>;

    // render loading message
    } else if (!isLoaded) {
      return <div>Loading notifications...</div>;

    // render table of notification results
    } else {
      return (
        <div>
          <DataTable notifications={notifications}/>
        </div>
      );
    }
  }
}

// connect NotificationContainer to store 
// receive state and actions as props

export default connect(
  state => state.gitmail,
  actions
)(Notifications);