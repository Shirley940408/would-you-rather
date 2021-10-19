import { ADD_INITIAL_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_INITIAL_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
