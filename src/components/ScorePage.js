import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionBlock from "./QuestionBlock";
import ContainerCoat from "./componentLab/ContainerCoat";
import QuestionTop from "./QuestionTop";
function ScorePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(handleInitialData());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const userList = () => {
    const sortedUsers = Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    );
    return sortedUsers.map(
      (user) => (
        <QuestionBlock
          userName={users[user].name}
          key={user}
          answers={Object.keys(users[user].answers).length}
          questions={users[user].questions.length}
          src={users[user].avatarURL}
        />
      )
      // ContainerCoat(
      //   QuestionBlock,
      //   QuestionTop,
      //   {
      //     userName: users[user].name,
      //     key: user,
      //     answers: Object.keys(users[user].answers).length,
      //     questions: users[user].questions.length,
      //     src: users[user].avatarURL,
      //   },
      //   { text: "asked By ..." }
      // )
    );
  };
  return <div className="container">{userList()}</div>;
}

export default ScorePage;
