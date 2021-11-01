import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScorePage from "./ScorePage";
import QuestionBoard from "./QuestionBoard";
import NavBar from "./NavBar";
import SignIn from "./SignIn";
import CreateNewQuestion from "./CreateNewQuestion";
export default function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact component={QuestionBoard} path="/home" />
          <Route component={CreateNewQuestion} path="/newQuestion" />
          <Route exact component={SignIn} path="/" />
          <Route exact component={ScorePage} path="/scorePage" />
        </Switch>
      </Router>
    </div>
  );
}
