// ? Temp fix for listen onPress
// ? https://github.com/testing-library/native-testing-library/issues/113
// TouchableOpacity
// TouchableHighlight
jest.mock("react-native/Libraries/Components/Touchable/TouchableOpacity", () => {
    const TouchableOpacity = jest.requireActual(
        "react-native/Libraries/Components/Touchable/TouchableOpacity",
    );

    TouchableOpacity.displayName = "TouchableOpacity";

    return TouchableOpacity;
});
