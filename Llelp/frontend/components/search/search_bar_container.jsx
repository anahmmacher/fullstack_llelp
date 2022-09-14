import { connect } from 'react-redux';
import { searchBusinesses } from '../../actions/business_actions';
import SearchBar from './search_bar'

const mapStateToProps = (state) => ({
  errors: Object.values(state.errors),
})

const mapDispatchToProps = dispatch => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)