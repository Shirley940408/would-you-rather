import { ADD_CURRENT_VOTE } from "../actions/addCurrentVote";
import { ADD_INITIAL_QUESTIONS } from "../actions/questions";
import { REMOVE_CURRENT_VOTE } from "../actions/removeCurrentVote";
export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_INITIAL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_CURRENT_VOTE:
      const questionsAdded = state[action.payload.qid][
        action.payload.answer
      ].votes.includes(action.payload.authedUser)
        ? state
        : {
            ...state,
            [action.payload.qid]: {
              ...state[action.payload.qid],
              [action.payload.answer]: {
                ...state[action.payload.qid][action.payload.answer],
                votes: state[action.payload.qid][
                  action.payload.answer
                ].votes.concat([action.payload.authedUser]),
              },
            },
          };
      return questionsAdded;
    case REMOVE_CURRENT_VOTE:
      const questionsRemoved = {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: state[action.payload.qid][
              action.payload.answer
            ].votes.filter((author) => author !== action.payload.authedUser),
          },
        },
      };
      return questionsRemoved;
    default:
      return state;
  }
}
