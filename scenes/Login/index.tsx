// Global Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Local Styles
import { ContainerCenter, PrimaryButton, SecondaryButton, ButtonText } from '@Styled';
import RouterActions from '@Services/RouterActions';

class LoginComponent extends Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <ContainerCenter>
                <PrimaryButton onPress={() => RouterActions.push('Register')} style={{ marginBottom: 10 }}>
                    <ButtonText>Register</ButtonText>
                </PrimaryButton>
                <SecondaryButton onPress={() => RouterActions.push('Home')}>
                    <ButtonText>Home</ButtonText>
                </SecondaryButton>

            </ContainerCenter>
        );
    }
}

const Login = connect()(LoginComponent);

export default Login;
