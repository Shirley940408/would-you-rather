import { getInitialData } from "../utils/api";
import { addInitialQuestions } from "./questions";
import { addInitialUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

// const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(addInitialUsers(users));
      dispatch(addInitialQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
