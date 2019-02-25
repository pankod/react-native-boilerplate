// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class LoginComponent extends Component {
	public render(): JSX.Element {
		return (
			<View>
				<Text> Login Page </Text>
			</View>
		);
	}
}

const Login = connect()(LoginComponent);

export default Login;
