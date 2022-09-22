import React from "react";

// import FilterForm from "./filter_form";
import SearchIndex from "./search_index";
import BusinessMap from "./business_map";
import Footer from '../footer/footer';

const Search = (props) => (
    <div className="user-pane">
        <div className="left-half">

        </div>
        
        <div className="right-half">
				<SearchIndex businesses={props.businesses}/>
				<BusinessMap businesses={props.businesses} near={props.location.data}/>
        </div>
				<Footer/>
    </div>
);

export default Search;