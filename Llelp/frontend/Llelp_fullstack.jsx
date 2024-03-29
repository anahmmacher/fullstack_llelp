import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import { searchBusinesses, fetchBusinesses } from './actions/business_actions'

document.addEventListener("DOMContentLoaded", () => {

	let store;
    if (window.currentUser){
        const preloadedState = {
            session: { id: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.searchBusinesses = searchBusinesses;
	window.fetchBusinesses = fetchBusinesses;


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});