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
          <Route exact component={QuestionBoard} path="/home" />
          <Route component={CreateNewQuestionContent} path="/newQuestion" />
          <Route exact component={SignIn} path="/" />
          <Route exact component={ScorePage} path="/scorePage" />
          <Route exact component={VoteNewQuestion} path="/voteNewQuestion" />
          <Route exact component={VotingResult} path="/votingResult" />
        </Switch>
      </Router>
    </div>
  );
}
