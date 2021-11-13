import { getInitialData, getUsers } from "../utils/api";
import { addInitialQuestions } from "./questions";
import { saveQuestionAnswer } from "../utils/api";
import { addInitialUsers } from "./users";
import { addCurrentVote } from "./addCurrentVote";
import { removeCurrentVote } from "./removeCurrentVote";

// const AUTHED_ID = "johndoe";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      console.log(users, questions);
      dispatch(addInitialUsers(users));
      dispatch(addInitialQuestions(questions));
    });
  };
}
export function handleUsers() {
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(addInitialUsers(users));
    });
  };
}
export function handleSaveVote(authedUser, qid, answer, history, src, author) {
  return (dispatch) => {
    dispatch(addCurrentVote(authedUser, qid, answer));
    return saveQuestionAnswer(authedUser, qid, answer)
      .then(() => {
        console.log(authedUser, qid, answer, history, src);
        history.push("/votingResult", {
          authedUser,
          qid,
          answer,
          src,
          author,
        });
      })
      .catch((e) => {
        console.error(e);
        dispatch(removeCurrentVote(authedUser, qid, answer));
      });
  };
}
