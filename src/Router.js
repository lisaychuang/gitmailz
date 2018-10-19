import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { endpoint } from './api';
import Notifications from './NotificationsContainer'
import Account from './AccountContainer'
import ListItemComposition from './Sidebar'
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import GithubIcon from "./GithubIcon";

const Home = () => (
    <Grid item xs={10} className="body">
      <Paper>
        <p>Gitmail is a Github notification dashboard that's intuitive, efficient, and useful. </p>
        

        <Button variant="contained" className="button" color="default" size="large">
          <GithubIcon/> 
          <a href={`${endpoint}/signin`}>Sign in with Github</a>
        </Button>
      </Paper>
    </Grid>
)

/**
 * 
 * @param {KeyboardEvent} evt 
 */
// function preferencesSave(evt) {
//   /** @type {HTMLFormElement} */

//   evt.preventDefault();
//   const formElement = evt.target;
//   const elements = [...formElement.elements];
//   const [repoTextArea] = elements.filter(elem => elem.name === 'favRepos');
//   const favRepos = repoTextArea.value;
  
//   fetch(`${endpoint}/find-repos.json`, {
//     credentials: "include",
//     mode: "cors",
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(favRepos)
//   })
//     .then(res => {
//       if (!res.ok) throw new Error('Problem fetching notification data');
//       return res.json();
//     })
//     // .then(
//     //   result => {
//     //     this.setState({
//     //       isLoaded: true,
//     //       notifications: result
//     //     });
//     //   },
//     //   // Error handling
//     //   error => {
//     //     this.setState({
//     //       isLoaded: true,
//     //       error
//     //     });
//     //   }
//     // );

// }

// function fetchFavRepos(){
//   return fetch(`${endpoint}/user-favorite-repos.json`, {
//     credentials: "include",
//     mode: "cors",
//     method: "GET",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => {
//       if (!res.ok) throw new Error('Problem fetching user"s favorite repos');
//       return res
//     })
//     // .catch(
//     //   // Error handling
//     //   error => {
//     //     error
//     //   }
//     // );
// }

// const Account = () => (
//   <div>
//     <h2>Account information</h2>

//     <form onSubmit={preferencesSave}>
//       <label>
//         List repos you'll like to set as favorite repos (:owner/:repo), separated by commas:<br></br>
//       </label>
//     <textarea name="favRepos" rows="6" cols="50" value={fetchFavRepos()} defaultValue="emberjs/ember.js, jquery/jquery, DefinitelyTyped/DefinitelyTyped"/>
//       <input type="submit" value="Submit" />
//     </form>

//     <p>You have signed in successfully</p>
//   </div>
// )

const Menu = () => (
  <Router>
    <Grid container spacing={24}>
      <Grid item xs={2} className="sidebar">
        <ListItemComposition />
      </Grid>

      <Grid item xs={10} className="body">
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/notifications" component={Notifications} />
      </Grid>

    </Grid>
  </Router>
);

export default Menu;