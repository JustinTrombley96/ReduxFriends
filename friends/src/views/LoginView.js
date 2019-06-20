import { connect } from 'react-redux';
import React, { Component } from 'react';

export class LoginView extends Component {
	render() {
		return (
			<div>
				<h1>Login Below!</h1>
				<form onSubmit=''>
					<input placeholder='Login' />
					<input placeholder='Password' />
					<button type='submit'>Login</button>
				</form>
			</div>
		);
	}
}

export default connect()(LoginView);
