import React from "react";
import ContainerCoat from "./componentLab/ContainerCoat";
import CreateNewQuestionContent from "./CreateNewQuestionContent";
import QuestionTop from "./QuestionTop";
import styles from "./CreateNewQuestion.module.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
export default function CreateNewQuestion() {
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);
  if (!authedUser) {
    history.push({ pathname: "/", state: { prevRoute: "/add" } });
  }
  return ContainerCoat(CreateNewQuestionContent, QuestionTop, null, {
    text: "Create a New Question",
    class: styles.top,
  });
}
