import { connect } from "react-redux";
import { searchBusinesses } from "../../actions/business_actions";
import Search from "./search"

const mapStateToProps = (state) => ({
    businesses: Object.values(state.entities.businesses),
}); 

const mapDispatchToProps = (dispatch) => ({
searchBusinesses: (filters) => dispatch(searchBusinesses(filters)),
updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

