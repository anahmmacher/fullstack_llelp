import * as APIUtil from '../util/business_api_util'

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const fetchBusiness = id => dispatch => (
  APIUtil.fetchBusiness(id)
    .then(business => dispatch(receiveBusiness(business)))
);

export const fetchBusinesses = () => dispatch => (
  APIUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const searchBusinesses = query => dispatch => (
  APIUtil.searchBusinesses(query)
    .then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const createBusiness = (business) => dispatch => (
    APIUtil.createBusiness(business).then(business => (
        dispatch(receiveBusiness(business))
    ))
);

