// Global Imports
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

// import codePush from "react-native-code-push";

// Local Imports
import AppContainer from "@Router";
import configureStore from "@Redux/store";
import RouterActions from "@Services/RouterActions";

import { theme } from "@Definitions/Styled";
import { I18n } from "@I18n";
import BootSplash from "react-native-bootsplash";

// Local Styles
import { SafeArea } from "@Styled";

// Configure Store
const store = configureStore({});

export class App extends Component<{}> {
    public componentDidMount(): void {
        I18n.init();
        BootSplash.hide();
    }

    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <SafeArea>
                        <AppContainer
                            ref={(ref: object) =>
                                RouterActions.setNavigationReference(ref)
                            }
                        />
                    </SafeArea>
                </ThemeProvider>
            </Provider>
        );
    }
}
export default App;

// App = codePush(App);
