import styled from "styled-components/native";

export const TitleText = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
`;

export const FrontText = styled.Text`
    color: white;
    font-size: 35;
    font-weight: bold;
    position: absolute;
`;

export const BackText = styled.Text`
    color: grey;
    font-size: 80;
    letter-spacing: 1px;
    font-weight: bold;
    line-height: 86;
    z-index: -1;
`;
