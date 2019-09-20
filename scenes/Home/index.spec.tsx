// #region Global Imports
import * as React from "react";
import { renderWithProviders } from "@Test/Helpers/render";
// #endregion Global Imports

// #region Local Imports
import Home from "./index";
// #endregion Local Imports

describe("Scenes", () => {
    describe("Home", () => {
        it("should match snapshot", () => {
            const wrapper = renderWithProviders(<Home />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
