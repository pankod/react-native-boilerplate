// Global Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

// Local Imports
import configureStore from '@App/Store';

// Configure Store
const store = configureStore({});

export default class App extends Component<{}> {
	public render(): JSX.Element {
		return (
			<Provider store={store}>
				<View>
					<Text>test</Text>
				</View>
			</Provider>
		);
	}
}
