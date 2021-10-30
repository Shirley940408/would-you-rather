import { ADD_AUTHED_USER } from "../actions/authedUser";
import { REMOVE_AUTHED_USER } from "../actions/removeAuthedUser";

export default function addAuthedUser(state = "", action) {
  switch (action.type) {
    case ADD_AUTHED_USER:
      return action.id;
    case REMOVE_AUTHED_USER:
      return "";
    default:
      return state;
  }
}
