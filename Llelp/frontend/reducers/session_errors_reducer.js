import {
	RECEIVE_CURRENT_USER, RECEIVE_SES_ERRORS
} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
	Object.freeze(state);
		switch (action.type) {
			case RECEIVE_CURRENT_USER:
				return [];
			case RECEIVE_SES_ERRORS:
				return action.errors;
			default:
				return state;
		}
};

export default SessionErrorsReducer