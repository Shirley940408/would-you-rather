import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScorePage from "./ScorePage";
import QuestionBoard from "./QuestionBoard";
import NavBar from "./NavBar";
import SignIn from "./SignIn";
import CreateNewQuestionContent from "./CreateNewQuestionContent";
import VoteNewQuestion from "./VoteNewQuestion";
import VotingResult from "./VotingResult";
export default function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route component={QuestionBoard} path="/home" />
          <Route component={CreateNewQuestionContent} path="/add" />
          <Route exact component={SignIn} path="/" />
          <Route component={ScorePage} path="/leaderBoard" />
          <Route component={VoteNewQuestion} path="/vote" />
          <Route component={VotingResult} path="/votingResult" />
        </Switch>
      </Router>
    </div>
  );
}
