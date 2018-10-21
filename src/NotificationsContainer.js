import React from "react";
import { endpoint } from "./data/api";
import DataTable from './Datatable'

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
    // fetch list of notifications from Rails API
    fetch(`${endpoint}/user-notifications.json`, {
      credentials: "include",
      mode: "cors"
    })
      // transform result into JSON object
      .then(res => {
        if (!res.ok) throw new Error('Problem fetching notification data');
        return res.json();
      })

      // setState with result object
      .then(
        result => {
          this.setState({
            isLoaded: true,
            notifications: result
          });
        },
        // Handle error
        error => {
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