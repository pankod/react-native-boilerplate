// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';

// Local Styles
import { ContainerCenter } from '@Assets/Styles';

class HomeComponent extends Component {
	public render(): JSX.Element {
		return (
			<ContainerCenter>
				<Text style={{ marginBottom: 40 }}> SVG Available! </Text>
				<SvgUri
					width="200"
					height="200"
					source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
				/>
			</ContainerCenter>
		);
	}
}

const Home = connect()(HomeComponent);

export default Home;
