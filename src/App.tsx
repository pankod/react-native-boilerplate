import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Settings } from "@Screens";
import { makeStore } from "@Redux/store";

import { I18n } from "@I18n";
const store = makeStore();

const App = () => {
    I18n.init();

    const Tab = createBottomTabNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
