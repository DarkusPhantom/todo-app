import React, { Fragment } from "react";
import Intro from "./intro/intro.js";
import Signup from "./signupForm/signupForm";
import SignupBox from "./signupBox/signupBox";

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
