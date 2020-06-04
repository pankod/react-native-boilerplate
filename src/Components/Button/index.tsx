import React from "react";
import { Text } from "react-native";

import { TouchableOpacity, TouchableOpacityType, View } from "./styled";

export type Props = TouchableOpacityType & {
    // props
    // foo?: string;
};

export const Button: React.FC<Props> = ({ ...otherProps }) => {
    return (
        <TouchableOpacity {...otherProps}>
            <View>
                <Text>Submit</Text>
            </View>
        </TouchableOpacity>
    );
};
