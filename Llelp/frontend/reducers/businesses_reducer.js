import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../actions/business_actions";

const businessesReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_BUSINESSES:
			return action.businesses
		case RECEIVE_BUSINESS:
			const newBusiness = {[action.business.id]: action.business};
			return Object.assign({}, state, newBusiness);
		default:
			return state;
	}
};

export default businessesReducer;