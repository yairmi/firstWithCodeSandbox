import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };
  //Lesson 3 6:11
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        //first is acc, second is current value
        const { muscles } = exercise; //Get the muscles from the exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }
  //category is the current selected category
  handleCategorySelected = category => {
    this.setState({ category });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  //the parameter inside setstate is the exercises from the old state and we return a new object
  //that represent the new state
  handleExerciseCreated = exercise => {
    this.setState(({ exercises }) => ({ exercises: [...exercises, exercise] }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreated={this.handleExerciseCreated}
        />
        <Exercises
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
          exercise={exercise}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
