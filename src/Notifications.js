import React from 'react';
import { endpoint } from './api';

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
        credentials: 'include'
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              notifications: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
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
                <ul>
                    {notifications.map(n => (
                        <li key={n.id}>
                            {n.subject.title}
                        </li>
                    ))}
                </ul>
            </div>
        )
      }
    }
  }