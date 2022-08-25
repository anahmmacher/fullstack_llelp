import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'Log In',
	navLink: <Link to='/signup'>sign up</Link>
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  demologin: (user) => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);