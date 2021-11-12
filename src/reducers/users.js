import { ADD_INITIAL_USERS } from "../actions/users";
import { ADD_CURRENT_VOTE } from "../actions/addCurrentVote";
export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_INITIAL_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_CURRENT_VOTE:
      const users = {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
      return users;
    default:
      return state;
  }
}
