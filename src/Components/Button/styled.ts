import styled from "styled-components/native";
import { ColorProps, SpaceProps, color, space } from "styled-system";
import { TouchableOpacityProps } from "react-native";

export type TouchableOpacityType = ColorProps & SpaceProps & TouchableOpacityProps;

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityType>`
    /* css */
    ${color}
    ${space}
`;

export const View = styled.View<ColorProps>`
    /* css */
    ${color}
`;
