import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ButtonCombo from "./ButtonCombo";
import Loading from "./componentLab/loading";
import ContainerCoat from "./componentLab/ContainerCoat";
import QuestionSheet from "./QuestionSheet";
function QuestionBoard() {
  const [unanswered, setUnanswered] = useState(false);
  const [answered, setAnswered] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const loadingInitialQuestions = useCallback(async () => {
    try {
      await dispatch(handleInitialData());
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);
  useEffect(() => {
    loadingInitialQuestions();
  }, [loadingInitialQuestions]);

  const questionsAnsweredKey = Object.keys(questions)
    .filter(
      (key) =>
        questions[key].optionOne.votes.includes(authedUser) ||
        questions[key].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const questionsUnansweredKey = Object.keys(questions)
    .filter(
      (key) =>
        !questions[key].optionOne.votes.includes(authedUser) &&
        !questions[key].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  useEffect(() => {
    if (questionsUnansweredKey.length) {
      setUnanswered(true);
      setAnswered(false);
    }
  }, [questionsUnansweredKey.length, setUnanswered, setAnswered]);
  const questionsUnanswered = questionsUnansweredKey.map(
    (key) => questions[key]
  );
  const buttonClicked = () => {
    setUnanswered(!unanswered);
    setAnswered(!answered);
  };

  const questionsAnswered = questionsAnsweredKey.map((key) => questions[key]);
  const users = useSelector((state) => state.users);
  console.log(questions, questionsUnanswered, questionsAnswered);

  return loading ? (
    <Loading />
  ) : !unanswered && answered ? (
    ContainerCoat(
      QuestionSheet,
      ButtonCombo,
      {
        questions: questionsAnswered,
        users,
      },
      { onClick: buttonClicked, unanswered, answered }
    )
  ) : (
    ContainerCoat(
      QuestionSheet,
      ButtonCombo,
      {
        questions: questionsUnanswered,
        users,
      },
      { onClick: buttonClicked, unanswered, answered }
    )
  );
}

export default QuestionBoard;
