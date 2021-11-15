import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import QuestionBlock from "./QuestionBlock";
function ScorePage() {
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  if (!authedUser) {
    history.push({ pathname: "/", state: { prevRoute: "/leaderBoard" } });
  }
  const userList = () => {
    const sortedUsers = Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    );
    console.log("sortedUsers: ", sortedUsers);
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
