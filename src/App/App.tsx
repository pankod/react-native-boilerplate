// Global Imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Local Imports
import AppContainer from '@App/Router';
import configureStore from '@App/Store';

// Local Styles
import { SafeArea } from '@Assets/Styles';

// Configure Store
const store = configureStore({});

export default class App extends Component<{}> {
	public render(): JSX.Element {
		return (
			<Provider store={store}>
				<SafeArea>
					<AppContainer />
				</SafeArea>
			</Provider>
		);
	}
}
