import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// material-ui components
import Grid from '@material-ui/core/Grid';

// Child components
import Notifications from './NotificationsContainer'
import Account from './AccountContainer'
import ListItemComposition from './Sidebar'

import Home from './presentation/Home'

// const Home = () => (
//     <Grid item xs={10} className="body">
//       <Paper>
//         <p>Gitmail is a Github notification dashboard that's intuitive, efficient, and useful. </p>
        

//         <Button variant="contained" className="button" color="default" size="large">
//           <GithubIcon/> 
//           <a href={`${endpoint}/signin`}>Sign in with Github</a>
//         </Button>
//       </Paper>
//     </Grid>
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