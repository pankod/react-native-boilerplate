// Global Imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Local Imports
import Home from '@Scenes/Home';
import Login from '@Scenes/Login';
import Register from '@Scenes/Register';

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
