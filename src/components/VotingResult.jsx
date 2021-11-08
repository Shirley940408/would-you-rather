import React from "react";
import ContainerCoat from "./componentLab/ContainerCoat";
import QuestionTop from "./QuestionTop";
import { useLocation } from "react-router";
import VotingResultContent from "./VotingResultContent";

export default function VotingResult() {
  const location = useLocation();
  const { src, answer, qid, author } = location.state;
  return ContainerCoat(
    VotingResultContent,
    QuestionTop,
    { src, answer, qid },
    { text: `${author} ask` }
  );
}
