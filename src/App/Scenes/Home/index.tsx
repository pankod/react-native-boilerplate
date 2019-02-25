// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class HomeComponent extends Component {
	public render(): JSX.Element {
		return (
			<View>
				<Text> Home Page </Text>
			</View>
		);
	}
}

const Home = connect()(HomeComponent);

export default Home;
