import React from "react";
import { Link, withRouter, useHistory} from 'react-router-dom';
import logo1 from '../../../../Llelp/app/assets/images/llelp_logos/llelp_logo_dark_bkgnd.png';
import logo2 from '../../../../Llelp/app/assets/images/llelp_logos/llelp_logo_light_bkgnd.png';
import GreetingContainer from "../greeting/greeting_container";
import SearchBarContainer from '../search/search_bar_container'

const Header = () =>{

	let headerEle;
	let history = useHistory();

	if (history.location.pathname === '/'){

		headerEle = <div className="home-header-div">
							<Link className='header-logo-1' to='/'><img src={logo1} width='75' height='30'/></Link>
							<SearchBarContainer/>
							<GreetingContainer/>
						</div>
	} else {
		headerEle = <div className="header-div">
							<Link className='header-logo-2' to='/'><img src={logo2} width='75' height='30'/></Link>
							<SearchBarContainer/>
							<GreetingContainer/>
		</div>
	}

	return(
		<div className="header-container">{headerEle}</div>
	)
};

export default withRouter(Header);