import * as React from "react";
import { Text, View } from "react-native";

import { TouchableOpacity, StyledProps } from "./styled";

export type Props = StyledProps & {
    title: string;
};

export const Card: React.FC<Props> = ({ title, ...otherProps }) => {
    return (
        <TouchableOpacity {...otherProps}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
