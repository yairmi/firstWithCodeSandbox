import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";
import SignIn from "../Exercises/Dialogs/SignIn";
export default ({ muscles, onExerciseCreated }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        exercises database
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreated} />
      <SignIn/>
    </Toolbar>
  </AppBar>
);
