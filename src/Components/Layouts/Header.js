import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";
export default ({ muscles, onExerciseCreated }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        exercises database
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreated} />
    </Toolbar>
  </AppBar>
);
