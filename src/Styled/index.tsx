import styled from 'styled-components/native';

export const Container = styled.View`
	flex:1
`;

export const SafeArea = styled.SafeAreaView`
	flex:1
`;

export const ContainerCenter = styled(Container)`
	justify-content:center;
	align-items:center;
`;

export const PrimaryButton = styled.TouchableOpacity`
	background-color:#007bff;
`;

export const SecondaryButton = styled.TouchableOpacity`
	background-color:#6c757d;
`;

export const ButtonText = styled.Text`
	padding-top:10;
	padding-bottom:10;
	padding-left:10;
	padding-right:10;
	color:#fff;
`;
