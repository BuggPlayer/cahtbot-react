import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import { LangProvider } from "./Context/LangContext";
import Home from "./Pages/Chatbot/Chatbot";
import UserTest from "./Pages/UserTest/UserTest";

function App() {
  return (
    <LangProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={UserTest} />
          <Route exact path="/chatbot" component={Home} />
        </Switch>
      </Router>
    </LangProvider>
  );
}

export default App;
