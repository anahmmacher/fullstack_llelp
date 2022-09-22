import React from "react";
import Carousel from "../carousel/Carousel";
import Footer from "../footer/footer";
import News from '../news/news';

const Homepage = () => {

	return(
		<div className="homepage-container">
			<Carousel/>
			<News/>
			<Footer/>
		</div>
	)
};

export default Homepage