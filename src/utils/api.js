import { _saveQuestion, _saveQuestionAnswer, _getUsers, _getQuestions } from './_DATA.js';

export const getInitialData = () => {
	return Promise.all([_getUsers, _getQuestions]).then(
    	([users, questions]) => ({users, questions})
    )
}

export const saveQuestion = (question) => _saveQuestion(question); 
export const saveQuestionAnswer = ( authedUser, qid, answer ) => _saveQuestionAnswer({ authedUser, qid, answer });