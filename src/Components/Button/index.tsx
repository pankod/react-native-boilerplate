import * as React from "react";
import { Text } from "react-native";

import { TouchableOpacity, TouchableOpacityType, View } from "./styled";

export type Props = TouchableOpacityType & {
    // props
    // foo?: string;
};

export const Button: React.FC<Props> = ({ ...otherProps }) => {
    return (
        <TouchableOpacity testID="btn" {...otherProps}>
            <View>
                <Text testID="btn-text">Submit</Text>
            </View>
        </TouchableOpacity>
    );
};
