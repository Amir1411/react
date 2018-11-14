import React from 'react';
import Validator from 'validator';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({errors});
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props.submit(this.state.data)
			.catch(err =>
	          this.setState({ errors : {formErr: err.response.data.message}, loading: false })
	        );
		}
	};

	validate = (data) => {
		const errors = {};
		if (!data.email) errors.email = "Email field is reqquired";
		if (!Validator.isEmail(data.email)) errors.email = "Email field is invalid";
		if (!data.password) errors.password = "Password field is reqquired";
		return errors;
	}
	
	
	render() {
		const {data, errors} =  this.state;
		return (
		  <form onSubmit={this.onSubmit}>
		  	{errors.formErr && <div className="errorContainerWrap"><div className="alert alert-danger alert-dismissable fade in"><strong>Error! </strong><span className="errorContainer">{errors.formErr}</span></div></div>}
			<div className={classNames('form-group', { 'has-error': errors.email })}>
				<label>Email</label>
				<input 
					type="email" 
					className="form-control" 
					name="email"
					value={data.email}
					onChange={this.onChange} 
				/>
				{errors.email && <span className="help-block">{errors.email}</span>}
			</div>
			<div className={classNames('form-group', { 'has-error': errors.password })}>
				<label>Password</label>
				<input 
					type="password" 
					className="form-control" 
					name="password"
					value={data.password}
					onChange={this.onChange} 
				/>
				{errors.password && <span className="help-block">{errors.password}</span>}
			</div>
			<div className="form-group">
				<button className="btn btn-info">Login</button>
			</div>
		  </form>
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default LoginForm;
