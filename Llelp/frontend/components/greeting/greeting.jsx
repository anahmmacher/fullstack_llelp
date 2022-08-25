import React from "react";
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout}) => {
	const sessionLinks = () => (
		<nav className="login-signup">
			<div id="login-div">
				<Link to="/login">Log In</Link>
			</div>
			<div id="signup-div">
				<Link to="/signup">Sign Up</Link>
			</div>
		</nav>
	);
	const personalGreeting = () => (
		<hgroup className="header-group">
			<h2 className="header-name">Hi, {currentUser.first_name}!</h2>
			<button className="header-button" onClick={logout}>Log Out</button>
		</hgroup>
	);

	return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;