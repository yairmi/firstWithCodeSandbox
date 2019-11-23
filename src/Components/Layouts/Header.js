import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Button
} from "material-ui";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        exercises database
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
