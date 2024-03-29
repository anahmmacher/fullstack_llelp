import { connect } from "react-redux";
import { searchBusinesses } from "../../actions/business_actions";
import Search from "./search"

const mapStateToProps = (state) => ({
    businesses: Object.values(state.entities.businesses),
}); 

const mapDispatchToProps = (dispatch) => ({
searchBusinesses: (query) => dispatch(searchBusinesses(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

