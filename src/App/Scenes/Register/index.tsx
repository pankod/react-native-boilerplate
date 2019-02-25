// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class RegisterComponent extends Component {
	public render(): JSX.Element {
		return (
			<View>
				<Text> Register Page </Text>
			</View>
		);
	}
}

const Register = connect()(RegisterComponent);

export default Register;
