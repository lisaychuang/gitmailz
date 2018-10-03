import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Notifications from './Notifications'

const Home = () => (
  <div>
    <h2>Home</h2>

    <p className="login">
        <a href="https://gitmailz-api.herokuapp.com/signin">Login</a>
    </p>
  </div>
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

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const BasicExample = () => (
  <Router>
    <div>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>  | 
        <Link to="/account">Account</Link> | 
        <Link to="/notifications">Notifications</Link>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/account" component={Account}/>
      <Route path="/notifications" component={Notifications}/>
    </div>
  </Router>
)
export default BasicExample