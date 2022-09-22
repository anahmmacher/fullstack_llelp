import React from "react";

const Footer = () =>{
	return(
		<div className="footer-container">
			<div className="footer-content-container">
				<div className="about-column">
					<h3 className="about-title">About</h3>
					<ul className="about-list">
						<li>
							LinkedIn
						</li>
						<li>
							AngelList
						</li>
					</ul>
				</div>
				<div className="discover-column">
					<h3 className="discover-title">Discover</h3>
					<ul className="about-list">
						<li>
							Email
						</li>
						<li>
							GitHub
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer;