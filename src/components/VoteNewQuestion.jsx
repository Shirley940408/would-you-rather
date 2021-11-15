import { useLocation, useParams, useHistory } from "react-router-dom";
import ContainerCoat from "./componentLab/ContainerCoat";
import { useSelector } from "react-redux";
import QuestionTop from "./QuestionTop";
import VoteNewQuestionContent from "./VoteNewQuestionContent";
import NotExisted from "./NotExisted";

export default function VoteNewQuestion() {
  const location = useLocation();
  const params = useParams();
  console.log(params);
  // eslint-disable-next-line no-undef
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  console.log(location.state);
  if (!authedUser) {
    history.push({
      pathname: "/",
      state: {
        prevRoute: `/questions/${params.qid}`,
      },
    });
    return null;
  }
  if (!Object.keys(questions).includes(params.qid)) {
    return <NotExisted />;
  }
  const question = questions[params.qid];
  const user = users[question.author];
  return ContainerCoat(
    VoteNewQuestionContent,
    QuestionTop,
    {
      src: user.avatarURL,
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
      author: user.name,
    },
    { text: `${user.name} ask` }
  );
}
