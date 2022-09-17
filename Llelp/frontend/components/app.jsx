import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link } from 'react-router-dom'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Carousel from './carousel/Carousel'
import Header from './header/header'
import SearchContainer from './search/search_container';



const App = () => (
	<div>
		<Route path='/' component={Header}/>
		<AuthRoute path="/login" component={LoginFormContainer}/>
		<AuthRoute path="/signup" component={SignupFormContainer}/>
		<Route exact path='/' component={Carousel}/>
		<Route exact path='/search/:q' component={SearchContainer}/>

	</div>
);

export default App;