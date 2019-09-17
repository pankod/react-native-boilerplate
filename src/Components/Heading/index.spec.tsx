// #region Global Imports
import * as React from "react";
import { shallow } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Heading } from "@Components";

// #endregion Local Imports

describe("Components", () => {
    describe("Heading", () => {
        const wrap = shallow(<Heading text="World" />);

        it("should render FrontText and  BackText without throwing an error", () => {
            expect(wrap.children().length).toEqual(2);
        });
        it("FrontText should equal World", () => {
            expect(
                wrap
                    .children()
                    .first()
                    .text()
            ).toEqual("World");
        });
    });
});
