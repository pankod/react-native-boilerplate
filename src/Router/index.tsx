// Global Imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Local Imports
import Home from '@Scenes/Home';
import Apod from '@Scenes/Apod';

const AppStackNavigator = createStackNavigator(
    {
        Apod: {
            navigationOptions: ({ navigation }) => ({
                title: 'Apod'
            }),
            screen: Apod
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
