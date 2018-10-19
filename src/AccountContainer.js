import React from "react";
import { endpoint } from "./api";

const DEFAULT_FAV_REPOS = "emberjs/ember.js, jquery/jquery, DefinitelyTyped/DefinitelyTyped";

/**
 * 
 * @param {KeyboardEvent} evt 
 */
function preferencesSave(evt) {
    /** @type {HTMLFormElement} */
  
    evt.preventDefault();
    const formElement = evt.target;
    const elements = [...formElement.elements];
    const [repoTextArea] = elements.filter(elem => elem.name === 'favRepos');
    const favRepos = repoTextArea.value;
    
    fetch(`${endpoint}/find-repos.json`, {
      credentials: "include",
      mode: "cors",
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favRepos)
    })
      .then(res => {
        if (!res.ok) throw new Error('Problem fetching notification data');
        return res.json();
      })
      // .then(
      //   result => {
      //     this.setState({
      //       isLoaded: true,
      //       notifications: result
      //     });
      //   },
      //   // Error handling
      //   error => {
      //     this.setState({
      //       isLoaded: true,
      //       error
      //     });
      //   }
      // );
  
  }

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      favRepos: ""
    };
  }

  componentDidMount() {
    fetch(`${endpoint}/user-favorite-repos.json`, {
      credentials: "include",
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Problem fetching user's favorite repos");
        return res.json();
      })
      .then(
        result => {
          this.setState({
            isLoaded: true,
            favRepos: result
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
  onInputChange = (evt) => {
      this.setState({
          favRepos: evt.target.value
      })
  }
  render() {
    const { error, isLoaded, favRepos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading favorite repos...</div>;
    } else {
      return (
        <div>
          <h2>Account information</h2>

          <form onSubmit={preferencesSave}>
            <label>
              List repos you'll like to set as favorite repos (:owner/:repo),
              separated by commas:
              <br />
            </label>
            <textarea
              name="favRepos"
              rows="6"
              cols="50"
              onChange={this.onInputChange}
              value={favRepos || DEFAULT_FAV_REPOS}
            />
            <input type="submit" value="Submit" />
          </form>

          <p>You have signed in successfully</p>
        </div>
      );
    }
  }
}
