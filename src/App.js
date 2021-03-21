import React, { Fragment } from "react";
import Intro from "./components/intro.js";
import Signup from "./components/signup/signup.js";

function App() {
  return (
    <Fragment>
      <Intro />
      <Signup />
    </Fragment>
  );
}

export default App;
