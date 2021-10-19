import { getInitialData } from "../utils/api";
import { addInitialQuestions } from "./questions";
import { addInitialUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

// const AUTHED_ID = "johndoe";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      console.log(users, questions);
      dispatch(addInitialUsers(users));
      dispatch(addInitialQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
