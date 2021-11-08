import React from "react";
import ContainerCoat from "./componentLab/ContainerCoat";
import CreateNewQuestionContent from "./CreateNewQuestionContent";
import QuestionTop from "./QuestionTop";
import styles from "./CreateNewQuestion.module.css";
export default function CreateNewQuestion() {
  return ContainerCoat(CreateNewQuestionContent, QuestionTop, null, {
    text: "Create a New Question",
    class: styles.top,
  });
}
