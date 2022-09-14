import React from "react";
import icon1 from '../../../../Llelp/app/assets/images/llelp_logos/search_icon.png';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			find: '',
			near: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}
	
	update(field) {
		return (e) => this.setState({[field]: e.currentTarget.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.find === "") {
			this.props.history.push({pathname: '/businesses', near: `${this.state.near}`});
			return;
		}
		this.props.searchBusinesses(this.state.find)
		.then(() => this.props.history.push({pathname: `/search/${this.state.find}`, near: `${this.state.near}`}))
		.fail(() => this.props.history.push({pathname: `/search/${this.state.find}`, near: `${this.state.near}`}))
	}

	render(){
		<div>
        <form className="search-bar-form" onSubmit={this.handleSubmit}>
          <div className="search-find-container">
            <input className="search-find-input" type="text" onChange={this.update('find')} placeholder="tacos, cheap dinner, Max's..." />
          </div>
          <div className="search-near-container">
              <input className="search-near-input" type="text" onChange={this.update('near')} placeholder="address, city, state or zip"/>
          </div>
          <button className="search-button" type="submit" ><img src={icon1}/></button>
        </form>
      </div>
	}
}

export default withRouter(SearchBar)