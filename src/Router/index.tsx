// Global Imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Local Imports
import Home from '@Scenes/Home';
import Apod from '@Scenes/Apod';

const AppStackNavigator = createStackNavigator(
    {

        Home: {
            navigationOptions: ({ navigation }) => ({
                title: 'Home'
            }),
            screen: Home
        },
        Apod: {
            navigationOptions: ({ navigation }) => ({
                title: 'Apod'
            }),
            screen: Apod
        }
    }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
