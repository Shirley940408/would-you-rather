import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ButtonCombo from "./ButtonCombo";
import ContainerCoat from "./componentLab/ContainerCoat";
import Question from "./Question";
import QuestionTop from "./QuestionTop";
import styles from "./QuestionBoard.module.css";
import QuestionSheet from "./QuestionSheet";
function QuestionBoard() {
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
  console.log(questions);

  return ContainerCoat(QuestionSheet, ButtonCombo, { questions, users });
}

export default QuestionBoard;
