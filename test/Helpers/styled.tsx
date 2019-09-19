import * as React from "react";
import { theme } from "@Definitions/Styled";
import { ThemeProvider } from "styled-components/native";
import renderer from "react-test-renderer";

export function renderWithTheme(child: React.ReactElement) {
    return renderer.create(
        <ThemeProvider theme={theme}>{child}</ThemeProvider>
    ).toJSON();
}
