import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ContainerCoat from "./componentLab/ContainerCoat";
import QuestionTop from "./QuestionTop";
import VoteNewQuestionContent from "./VoteNewQuestionContent";

export default function VoteNewQuestion() {
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);
  const location = useLocation();
  if (!authedUser) {
    history.push("/");
    return null;
  }
  return ContainerCoat(
    VoteNewQuestionContent,
    QuestionTop,
    {},
    { text: `${location.state.author} ask` }
  );
}
