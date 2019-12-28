import React, { Fragment, useState } from "react";
import { Select } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  FormControl: { width: 500 }
}));

export default ({ muscles, onExerciseCreated }) => {
  const [open, setOpen] = useState(false); //Hooks
  const [exercise, setExercise] = useState({
    title: "",
    description: "",
    muscle: ""
  });

  const classes = useStyles();

  const handleToggle = () => {
    setOpen(!open);
    console.log("Open=", open);
  };

  /*handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };*/
  const handleChange = name => ({ target: { value } }) => {
    //this.setState({ exercise: { ...this.state.exercise, [name]: value } });
    setExercise({ exercise: { ...exercise, [name]: value } });
  };

  const onSubmit = () => {
    //TODO: validation
    //extract the exercise from the state
    //const { exercise } = this.state;
    //this.props.onCreate({
    //  ...exercise,
    //  id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")});
    onExerciseCreated({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
    });

    //this.setState({
    //  open: false,
    //  exercise: { title: "", description: "", muscles: "" }
    //});
    setOpen(false);
    setExercise({ title: "", description: "", muscles: "" });
  };

  return (
    //const {
    //    open,
    //    exercise: { title, description, muscles }
    //  } = this.state,
    //  { /*classes,*/ muscles: categories } = this.props, //because we wrapped our class with withStyles the props recieve another property called classes

    <Fragment>
      <Button variant="fab" onClick={handleToggle} mini>
        <Add />
      </Button>
      <Dialog open={open} onClose={handleToggle}>
        <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill the form below.</DialogContentText>
          <form>
          <TextField
              label="Title"
              value={exercise.title}
              onChange={handleChange("title")}
              margin="normal"
              className={classes.FormControl}
            />
            <br/>
            <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select value={exercise.muscle} onChange={handleChange("muscles")}>
                {muscles.map(muscle => (
                  <MenuItem key={muscle} value={muscle}>
                    {muscle}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              multiline
              rows="4"
              label="Description"
              value={exercise.description}
              onChange={handleChange("description")}
              margin="normal"
              className={classes.FormControl}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="raised" onClick={onSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
