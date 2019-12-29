import React, { Fragment, useState } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export default () => {
  const [stateExercises, setExercises] = useState(exercises);
  const [exercise, setExercise] = useState({});
  const [category, setCategory] = useState("");
  //Lesson 3 6:11
  const getExercisesByMuscles = () => {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        //first is acc, second is current value
        const { muscles } = exercise; //Get the muscles from the exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  };
  //category is the current selected category
  const handleCategorySelected = category => {
    setCategory( category );
  };

  const handleExerciseSelected = id => {
    setExercise(exercises.find(ex => ex.id === id));
  };
  //the parameter inside setstate is the exercises from the old state and we return a new object
  //that represent the new state
  const handleExerciseCreated = exercise => {
    setExercises({ stateExercises: [...stateExercises, exercise] });
  };

  const ExercisesByMuscles = getExercisesByMuscles();

  return (
    <Fragment>
      <Header muscles={muscles} onExerciseCreated={handleExerciseCreated} />
      <Exercises
        exercises={ExercisesByMuscles}
        category={category}
        onSelect={handleExerciseSelected}
        exercise={exercise}
      />
      <Footer
        category={category}
        muscles={muscles}
        onSelect={handleCategorySelected}
      />
    </Fragment>
  );
};
