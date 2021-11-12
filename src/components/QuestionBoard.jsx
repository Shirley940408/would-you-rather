import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ButtonCombo from "./ButtonCombo";
import ContainerCoat from "./componentLab/ContainerCoat";
import QuestionSheet from "./QuestionSheet";
function QuestionBoard() {
  const [unanswered, setUnanswered] = useState(true);
  const [answered, setAnswered] = useState(false);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  useEffect(() => {
    try {
      dispatch(handleInitialData());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);
  const buttonClicked = () => {
    setUnanswered(!unanswered);
    setAnswered(!answered);
  };
  const questionsUnansweredKey = Object.keys(questions)
    .filter(
      (key) =>
        questions[key].optionOne.votes.length === 0 &&
        questions[key].optionTwo.votes.length === 0
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const questionsUnanswered = questionsUnansweredKey.map(
    (key) => questions[key]
  );
  const questionsAnsweredKey = Object.keys(questions)
    .filter(
      (key) =>
        questions[key].optionOne.votes.length !== 0 ||
        questions[key].optionTwo.votes.length !== 0
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const questionsAnswered = questionsAnsweredKey.map((key) => questions[key]);
  const users = useSelector((state) => state.users);
  console.log(questions, questionsUnanswered, questionsAnswered);

  return !unanswered && answered
    ? ContainerCoat(
        QuestionSheet,
        ButtonCombo,
        {
          questions: questionsAnswered,
          users,
        },
        { onClick: buttonClicked, unanswered, answered }
      )
    : ContainerCoat(
        QuestionSheet,
        ButtonCombo,
        {
          questions: questionsUnanswered,
          users,
        },
        { onClick: buttonClicked, unanswered, answered }
      );
}

export default QuestionBoard;
