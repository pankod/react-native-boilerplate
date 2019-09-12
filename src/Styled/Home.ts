import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`;

export const Middle = styled.View`
   flex:1;
    justify-content: space-around;
`;

export const Centered = styled.View`
    justify-content:center;
	align-items:center;
`;

export const Buttons = styled.View`
    background: #f9da2e;
    border-radius: 8px;
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 0;
    width: 100px;
    height: 36px;
    margin-left: 15px;
    padding: 10px 3px;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    color: #4b6c8d;
    .button {
        cursor: pointer;
    }
    .active {
        color: #2c3e50;
    }
`;

export const Apod = styled.View`
    display: flex;
    align-items: center;
`;

export const ApodButton = styled.TouchableOpacity`
    background: #f9da2e;
    border-radius: 5px;
    padding: 5px 10px;
    color: #2c3e50;
`;

export const ApodText = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const TopText = styled.Text`
    font-size: 100px;
    color: #ffffff;
    margin-bottom: 10px;
`;
