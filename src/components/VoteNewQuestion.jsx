import React from "react";
import { useLocation } from "react-router-dom";
import ContainerCoat from "./componentLab/ContainerCoat";
import QuestionTop from "./QuestionTop";
import VoteNewQuestionContent from "./VoteNewQuestionContent";

export default function VoteNewQuestion() {
  const location = useLocation();
  return ContainerCoat(
    VoteNewQuestionContent,
    QuestionTop,
    {},
    { text: `${location.state.author} ask` }
  );
}
