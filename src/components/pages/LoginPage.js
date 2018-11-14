import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import {connect} from 'react-redux';
import { login } from '../../actions/user';

class LoginPage extends Component {
	submit = data => 
	this.props.login(data).then(() => this.props.history.push("/dashboard"));
	render() {
		return (
			<div>
				<h1>Login Pag</h1>
				<LoginForm submit={this.submit}/>
			</div>
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
