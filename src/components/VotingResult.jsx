import ContainerCoat from "./componentLab/ContainerCoat";
import QuestionTop from "./QuestionTop";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router";
import VotingResultContent from "./VotingResultContent";

export default function VotingResult() {
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);
  const location = useLocation();
  if (!authedUser) {
    history.push("/");
    return null;
  }

  const { src, answer, qid, author } = location.state;
  return ContainerCoat(
    VotingResultContent,
    QuestionTop,
    { src, answer, qid },
    { text: `${author} ask` }
  );
}
