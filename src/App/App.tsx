// Global Imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import codePush from "react-native-code-push";

// Local Imports
import AppContainer from '@App/Router';
import configureStore from '@App/Store';
import RouterActions from '@App/Services/RouterActions';

// Local Styles
import { SafeArea } from '@Assets/Styles';

// Configure Store
const store = configureStore({});

export class App extends Component<{}> {

	public componentDidMount(): void {
		SplashScreen.hide();
	}

	public render(): JSX.Element {
		return (
			<Provider store={store}>
				<SafeArea>
					<AppContainer ref={(ref) => RouterActions.setNavigationReference(ref)} />
				</SafeArea>
			</Provider>
		);
	}
}

App = codePush(App);
