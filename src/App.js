import React from "react";
import RouterContainer from "./container/RouterContainer";
import PrimarySearchAppBar from "./presentation/AppBar";
import Grid from "@material-ui/core/Grid";
import "./App.css";

const App = () => (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={12} className="header">
        <PrimarySearchAppBar />
      </Grid>

      <Grid item xs={12} className="router">
        <RouterContainer />
      </Grid>
    </Grid>
  </div>
); 

export default App;
