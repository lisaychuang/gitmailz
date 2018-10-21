import React from "react";

import { getNotifications } from "../data/requests";
import DataTable from '../presentation/Datatable'

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notifications: []
    };
  }

  componentDidMount() {
    // fetch list of user's notifications from Rails API
    getNotifications()
      .then(
        // setState with result object
        result => {
          this.setState({
            isLoaded: true,
            notifications: result
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

  render() {
    const { error, isLoaded, notifications } = this.state;
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