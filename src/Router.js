import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { endpoint } from './api';
import Notifications from './Notifications'
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

const Home = () => (

    <Grid item xs={6} className="body">
      <Paper><a href={`${endpoint}/signin`}>Login</a></Paper>
    </Grid>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Account = () => (
  <div>
    <h2>Account information</h2>
    <p>You have signed in successfully</p>
  </div>
)

const BasicExample = () => (
  <Router>
    <Grid container spacing={24}>
      <Grid item xs={3} className="router"
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </Grid>

      <Grid item xs={9} className="body">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/notifications" component={Notifications} />
      </Grid>

    </Grid>
  </Router>
);

// const BasicExample = () => (
//   <Router>
//     <Grid item xs={12} className="router">
//         <Link to="/">Home</Link> | 
//         <Link to="/about">About</Link>  | 
//         <Link to="/account">Account</Link> | 
//         <Link to="/notifications">Notifications</Link>
//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/account" component={Account}/>
//       <Route path="/notifications" component={Notifications}/>
//     </Grid>
//   </Router>
// )
export default BasicExample