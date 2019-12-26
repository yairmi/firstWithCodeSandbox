//Buisiness logic of the application

import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";
const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: "auto"
  }
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
}) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">{title}</Typography>
          <Typography variant="subheading" style={{ marginTop: 20 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
