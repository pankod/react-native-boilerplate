import React from "react";
import { Provider } from "react-redux";

import { Home } from "@Screens";
import { makeStore } from "@Redux/store";

const store = makeStore();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Home />
            </Provider>
        </>
    );
};

export default App;
