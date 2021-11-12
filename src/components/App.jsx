import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ScorePage from "./ScorePage";
import QuestionBoard from "./QuestionBoard";
import NavBar from "./NavBar";
import SignIn from "./SignIn";
import NotExisted from "./NotExisted";
import CreateNewQuestionContent from "./CreateNewQuestionContent";
import VoteNewQuestion from "./VoteNewQuestion";
import VotingResult from "./VotingResult";
export default function App() {
  const location = useLocation();
  const authedUser = useSelector((state) => state.authedUser);
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact component={QuestionBoard} path="/home" />
          <Route exact component={CreateNewQuestionContent} path="/add" />
          <Route exact component={SignIn} path="/" />
          <Route exact component={ScorePage} path="/leaderBoard" />
          <Route exact component={VoteNewQuestion} path="/questions/:qid" />
          <Route exact component={VotingResult} path="/votingResult" />
          <Route component={NotExisted}>
            {!authedUser ? (
              <Redirect
                to={{
                  pathname: "/",
                  state: { prevRoute: location.pathname },
                }}
              />
            ) : (
              <NotExisted />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
