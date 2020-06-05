import styled from "styled-components/native";
import { SpaceProps, space } from "styled-system";
import { TouchableOpacityProps } from "react-native";

export type StyledProps = SpaceProps & TouchableOpacityProps;

export const TouchableOpacity = styled.TouchableOpacity<StyledProps>`
    border: 1px solid #ccc;
    ${space};
`;
