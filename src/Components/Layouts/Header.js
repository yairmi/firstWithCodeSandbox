import React from "react";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";
import SignInUser from "../Dialogs/SignIn";
export default ({ muscles, onExerciseCreated }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        exercises database
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreated} />
      <SignInUser />
    </Toolbar>
  </AppBar>
);
