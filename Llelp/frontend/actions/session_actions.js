import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SES_ERRORS = 'RECEIVE_SES_ERRORS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users =>({
	type: RECEIVE_USERS,
	users
});

export const receiveCurrentUser = currentUser =>({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
	type: RECEIVE_SES_ERRORS,
	errors
});

export const signup = user => dispatch => (
	APIUtil.signup(user).then(user => (
		dispatch(receiveCurrentUser(user))
	), err => (
		dispatch(receiveErrors(err.responseJson))
	))
);

export const login = user => dispatch => (
	APIUtil.login(user).then(user => (
		dispatch(receiveCurrentUser(user))
	), err => (
		dispatch(receiveErrors(err.responseJson))
	))
);

export const logout = () => dispatch => (
	APIUtil.logout().then(user => (
		dispatch(logoutCurrentUser())
	))
);

export const fetchUsers = () => dispatch (
	APIUtil.getUsers()
	.then(users => dispatch(receiveUsers(users)))
);