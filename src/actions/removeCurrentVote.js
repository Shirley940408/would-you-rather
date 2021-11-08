export const REMOVE_CURRENT_VOTE = "REMOVE_CURRENT_VOTE";

export const removeCurrentVote = (authedUser, qid, answer) => ({
  type: REMOVE_CURRENT_VOTE,
  payload: { authedUser, qid, answer },
});
