import React from "react";
import { endpoint } from "./api";
// import { notification } from "./Seed";
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
    fetch(`${endpoint}/user-notifications.json`, {
      credentials: "include",
      mode: "cors"
    })
      .then(res => {
        if (!res.ok) throw new Error('Problem fetching notification data');
        return res.json();
      })
      .then(
        result => {
          this.setState({
            isLoaded: true,
            notifications: result
          });
        },
        // Error handling
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
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <DataTable notifications={notifications}/>
        </div>
      );
    }
  }
}