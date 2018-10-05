import React from "react";
import { endpoint } from "./api";
import { notification } from "./Seed";
import DataTable from './Datatable'

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notifications: notification
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
          <h2>My Notifications </h2>

          <DataTable/>
        </div>
      );
    }
  }
}


// ORIGINAL UI TO DISPLAY NOTIFICATIONS
// <div className="notification-container">
// {notifications.map(n => (
//   <div className="notification" key={n.id}>
//   Repo: <a href={n.repository.html_url}>{n.repository.name}</a><br></br>
//     {n.subject.type}: <a href={n.subject.url}>{n.subject.title}</a><br></br>
//     Reason: {n.reason}<br></br>
//     Update date: {n.updated_at.slice(0,10)}
//     <hr></hr>
//   </div>
// ))}
// </div>