import React from "react";
import SearchIndexItem from "./search_index_item";

  const SearchIndex = ({ businesses }) => (
           <div className="index-body">
       <ol className="search-index-list">
            {businesses.map((business, idx) =>
              <li key={idx}>
                <SearchIndexItem idx={idx} business={business} fetchBusiness={this.props.fetchBusiness} />
              </li>)}
            </ol>
       </div>
    );


export default SearchIndex