import React from "react";
import { Provider } from "react-redux";
import { StatusBar, SafeAreaView } from "react-native";

import { Button } from "@Components";
import { makeStore } from "@Redux/store";

const store = makeStore();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <Button />
                </SafeAreaView>
                <Button padding={4} bg="red" />
            </Provider>
        </>
    );
};

export default App;
