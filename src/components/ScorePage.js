import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import QuestionBlock from "./QuestionBlock";
function ScorePage() {
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);
  if (!authedUser) {
    history.push("/");
  }
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(handleInitialData());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);
  const users = useSelector((state) => state.users);
  const userList = () => {
    const sortedUsers = Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    );
    return sortedUsers.map((user) => (
      <QuestionBlock
        userName={users[user].name}
        key={user}
        answers={Object.keys(users[user].answers).length}
        questions={users[user].questions.length}
        src={users[user].avatarURL}
      />
    ));
  };
  return <div className="container">{userList()}</div>;
}

export default ScorePage;
