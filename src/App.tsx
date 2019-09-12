// Global Imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";

// import SplashScreen from 'react-native-splash-screen';
// import codePush from "react-native-code-push";

// Local Imports
import AppContainer from '@Router';
import configureStore from '@Redux/store';
import RouterActions from '@Services/RouterActions';

import { theme } from "@Definitions/Styled";

// Local Styles
import { SafeArea } from '@Styled';

// Configure Store
const store = configureStore({});

export class App extends Component<{}> {

    public componentDidMount(): void {
        // SplashScreen.hide();
    }

    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <SafeArea>
                        <AppContainer ref={(ref: object) => RouterActions.setNavigationReference(ref)} />
                    </SafeArea>
                </ThemeProvider>

            </Provider>
        );
    }
}
export default App;

// App = codePush(App);
