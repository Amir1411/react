import React, { Component } from 'react';

class LoginPage extends Component {
	state = {
		showList: false
	}
	onChange = e => console.log(e.target.files);
	render() {
		return (
			<div className="jumbotron">
				<h1>Works</h1>
			</div>
		);
	}
}
export default LoginPage;
