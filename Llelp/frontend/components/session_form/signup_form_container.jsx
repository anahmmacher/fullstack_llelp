import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'Sign Up',
	navLink: <Link to='/signup'>log in</Link>
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  demologin: (user) => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);