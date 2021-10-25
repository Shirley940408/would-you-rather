import { ADD_INITIAL_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_INITIAL_QUESTIONS:
      console.log(action.questions);
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
