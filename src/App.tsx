import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";

import { Button } from "@Components";

const App = () => {
    return (
        <>
            <ThemeProvider theme={[]}>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <Button />
                </SafeAreaView>
                <Button padding={4} bg="red" />
            </ThemeProvider>
        </>
    );
};

export default App;
