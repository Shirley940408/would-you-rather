import { ADD_INITIAL_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_INITIAL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
