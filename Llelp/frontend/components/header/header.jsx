import React from "react";
import { Link } from 'react-router-dom'
import logo1 from '../../../../Llelp/app/assets/images/llelp_logos/llelp_logo_dark_bkgnd.png'
import logo2 from '../../../../Llelp/app/assets/images/llelp_logos/llelp_logo_light_bkgnd.png'
import GreetingContainer from "../greeting/greeting_container";

const Header = () =>{
	return(
		<div className="header-div">
			<Link className='header-logo-2' to='/'><img src={logo2} width='75' height='30'/></Link>
			<GreetingContainer/>
		</div>
	)
};

export default Header;