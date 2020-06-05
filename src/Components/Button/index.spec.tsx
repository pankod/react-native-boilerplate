import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "@Components/Button";

describe("Components", () => {
    it("renders successfully", () => {
        const { getByTestId } = render(<Button />);

        getByTestId("btn-text");
    });

    it("handles press", () => {
        const onPressSpy = jest.fn();

        const { getByTestId } = render(<Button onPress={() => onPressSpy()} />);

        const button = getByTestId("btn");

        fireEvent.press(button);

        expect(onPressSpy).toHaveBeenCalled();
        expect(onPressSpy).toHaveBeenCalledTimes(1);
    });
});
