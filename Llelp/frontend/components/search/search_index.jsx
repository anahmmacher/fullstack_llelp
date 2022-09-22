import React, {useState} from "react";
import SearchIndexItem from "./search_index_item";

  const SearchIndex = (props) => {
			return(
           <div className="index-body">
       <ol className="search-index-list">
            {props.businesses.map((business, idx) =>
              <li key={idx}>
                {business.name}
              </li>)}
            </ol>
       </div>
	)};


export default SearchIndex