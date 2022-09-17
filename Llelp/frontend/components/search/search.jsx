import React from "react";

// import FilterForm from "./filter_form";
import SearchIndex from "./search_index";
import BusinessMap from "./business_map";

const Search = (props) => (
    <div className="user-pane">
        <div className="left-half">
          <FilterForm updateFilter={props.updateFilter}/>
        </div>
        
        <div className="right-half">
				<SearchIndex businesses={props.businesses}/>
        <BusinessMap businesses={props.businesses}
                    updateFilter={props.updateFilter}
                    singleBench={false}
										near={props.near} />
        </div>
    </div>
);

export default Search;