// Global Imports
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// Local Styles
import { ContainerCenter } from '@Styled';

class RegisterComponent extends Component {
    public render(): JSX.Element {
        return (
            <ContainerCenter>
                <Text> Register Page </Text>
            </ContainerCenter>
        );
    }
}

const Register = connect()(RegisterComponent);

export default Register;
