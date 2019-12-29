import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import SignIn from "./Components/SignIn";
import { BrowserRouter, Route } from "react-router-dom";
//https://material.io/resources/icons/
//render(<App />, document.getElementById("root"));

render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/App" component={App} />
      <Route exact path="/" component={SignIn} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
