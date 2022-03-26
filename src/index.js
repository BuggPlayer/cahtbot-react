import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Wrapper from "../src/components/Lang/Wrapper";
ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
