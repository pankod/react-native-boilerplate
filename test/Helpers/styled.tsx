import * as React from "react";
import { theme } from "@Definitions/Styled";
import { ThemeProvider } from "styled-components/native";
import { I18nextProvider } from "react-i18next";
import renderer from "react-test-renderer";
import { I18n } from "../../src/I18n/index";

export function renderWithTheme(child: React.ReactElement) {
    return renderer
        .create(
            <I18nextProvider i18n={I18n}>
                <ThemeProvider theme={theme}>{child}</ThemeProvider>
            </I18nextProvider>
        )
        .toJSON();
}
