import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`;

export const ApodImage = styled.Image`
    display: flex;
    width: ${({ theme }) => theme.dimensions.screenWidth};
    height: ${({ theme }) => theme.dimensions.screenHeight};
`;
