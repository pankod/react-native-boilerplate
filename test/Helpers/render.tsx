// #region Global Imports
import * as React from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components/native";
import renderer from "react-test-renderer";
// #endregion Global Imports

// #region Local Imports
import { configureStore } from "@Redux/store";
import { I18n } from "@I18n/index";
import { theme } from "@Definitions/Styled";
// #endregion Local Imports

export function renderWithProviders(child: React.ReactElement) {
    return renderer
        .create(
            <Provider store={configureStore({})}>
                <I18nextProvider i18n={I18n}>
                    <ThemeProvider theme={theme}>{child}</ThemeProvider>
                </I18nextProvider>
            </Provider>
        )
        .toJSON();
}
