//Buisiness logic of the application

import React from "react";
import { Grid, Paper } from "material-ui";

const style = {
  Paper: { padding: 20, marginTop: 20, marginBottom: 20 }
};

export default props => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>left pane</Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>right pane</Paper>
    </Grid>
  </Grid>
);
