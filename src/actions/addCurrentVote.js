export const ADD_CURRENT_VOTE = "ADD_CURRENT_VOTE";

export const addCurrentVote = (authedUser, qid, answer) => ({
  type: ADD_CURRENT_VOTE,
  payload: { authedUser, qid, answer },
});
