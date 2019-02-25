// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

// Local Styles
import { ContainerCenter } from '@Assets/Styles';

class HomeComponent extends Component {
	public render(): JSX.Element {
		return (
			<ContainerCenter>
				<Text> Home Page </Text>
			</ContainerCenter>
		);
	}
}

const Home = connect()(HomeComponent);

export default Home;
