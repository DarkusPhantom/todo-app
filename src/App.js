import React, { Fragment } from "react";
import Intro from "./components/intro/intro.js";
import Signup from "./components/signupForm/signupForm";
import SignupBox from "./components/signupBox/signupBox";

function App() {
  return (
    <Fragment>
      <Intro />
      <SignupBox />
      <Signup />
    </Fragment>
  );
}

export default App;
