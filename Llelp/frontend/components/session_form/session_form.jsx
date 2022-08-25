import React from "react";
import { Link, withRouter} from 'react-router-dom'

class SessionForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			password: "",
			first_name: "",
			last_name: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this)
		this.demoUserLogin = this.demoUserLogin.bind(this)
	}
	update(field){
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

	}

	handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.goBack());
  }

	// clearform() {
  //   if (this.props.formType === "Sign Up") {
  //     this.state = {
  //       first_name: "",
	// 			last_name: "",
  //       email: "",
  //       password: ""
  //     };
  //   } else if(this.props.formType === "Log In") {
  //     this.state = {
  //       email: "",
  //       password: ""
  //     };
  //   }
  // }

	renderErrors(){
    return(
        <ul>
            {this.props.errors.map((error, i) =>(
                <li key={`error-${i}`}>
                    {error}
                </li>
            ))}
        </ul>
    );
  }

	demoUserLogin(e) {
    e.preventDefault();
    const user = {email: 'demouser@user.com', password: 'demouser'};
    this.props.demologin(user).then(() => this.props.history.goBack());
  }

	render(){

		if (this.props.formType === 'Log In') {
      return (
      
      <div className='login-signup-form'>
        <header className='form-header'>
            <Link className="form-header-link" to="/">llelp</Link>
        </header>
				{this.renderErrors()}
        <form className="form" onSubmit={this.handleSubmit}>
          <h2 className="login-signup-title">Log in to Llelp</h2>
          <div className='switch-form-both'>
            <h3 className="switch-form-label">New to Llelp?</h3>
						{this.props.navLink}
          </div>
          <p className='terms'>By logging in, you agree to Llelp’s Terms of Service <br></br> and Privacy Policy.</p>
          <div className="demo-user" >
              <button className="demo-button" onClick={this.demoUserLogin}>Continue as Demo User</button>
          </div>
          <div className="divider">OR</div>
          <br />
            <input className="input" 
              type="email" 
              value={this.state.email} 
              onChange={this.update('email')} 
              placeholder='Email'
              required/>
          <br />
          <input className="input"
            type="password" 
            value={this.state.password} 
            onChange={this.update('password')}
            placeholder='Password'
            required/>
          <br />
          <button className="submit" type="submit">{this.props.formType}</button>
          <div className="switch-form-both-2">
              <h3 className="switch-form-label-2">New to Llelp?
                {this.props.navLink}
              </h3>
          </div>
        </form>
        
      </div>
    )} else if (this.props.formType === 'Sign Up') {
      return (
        <div className='login-signup-form'>
          <header className='form-header'>
            <Link className="form-header-link" to="/">llelp</Link>
          </header>
          <form className="form" onSubmit={this.handleSubmit}>
            <h2 className="login-signup-title">Sign Up for Llelp</h2>
            <p className='terms'>By continuing, you agree to Llelp’s Terms of Service <br></br> and Privacy Policy.</p>
            <div className="demo-user" >
              <button className="demo-button" onClick={this.demoUserLogin}>Continue as Demo User</button>
          </div>
            <div className="divider">OR</div>
            <br />
              <div>
                <input className="name-input-el" type="text" 
                  value={this.state.first_name} 
                  onChange={this.update('first_name')} 
                  placeholder='First Name'
                  required/>
                <input className="name-input-el" type="text" 
                  value={this.state.last_name} 
                  onChange={this.update('last_name')} 
                  placeholder='Last Name'
                  required/>
              </div>
              
            <br />
              <input className="input"
                type="text" 
                value={this.state.email} 
                onChange={this.update('email')} 
                placeholder='Email'
                required/>
            <br />
            <input className="input"
              type="password" 
              value={this.state.password} 
              onChange={this.update('password')}
              placeholder='Password'
              required/>
            <br />
            <button className="submit" type="submit">{this.props.formType}</button>
            <div className="switch-form-both-2">
              <h3 className="switch-form-label-2">Already on Llelp?
                {this.props.navLink}
              </h3>
            </div>          
          </form>
        </div>
      )
	}

	}

}

export default withRouter(SessionForm)
