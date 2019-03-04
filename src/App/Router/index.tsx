// Global Imports
import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

// Local Imports
import Home from '@App/Scenes/Home';
import Login from '@App/Scenes/Login';
import Register from '@App/Scenes/Register';

const AppStackNavigator = createStackNavigator(
	{
		Login: {
			navigationOptions: ({ navigation }) => ({
				title: 'Login'
			}),
			screen: Login
		},
		Register: {
			navigationOptions: ({ navigation }) => ({
				title: 'Register'
			}),
			screen: Register
		},
		Home: {
			navigationOptions: ({ navigation }) => ({
				title: 'Home'
			}),
			screen: Home
		}
	}
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
