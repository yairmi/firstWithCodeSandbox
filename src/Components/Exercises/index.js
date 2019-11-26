//Buisiness logic of the application

import React from "react";
import { Grid, Paper } from "material-ui";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: { padding: 20, marginTop: 20, marginBottom: 20 }
};

export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPane styles={styles} />
    </Grid>
    <Grid item sm>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
