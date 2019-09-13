// Global Imports
import React, { Component } from 'react';
import { Text, Svg } from 'react-native-svg';
import { connect } from 'react-redux';

// Local Styles
import { Container } from './styled';
import { ContainerCenter } from '@Styled';


class ApodComponent extends Component {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerCenter>
                    <Svg height="100" width="200">
                        <Text
                            fill="white"
                            stroke="white"
                            fontSize="30"
                            fontWeight="bold"
                            x="100"
                            y="30"
                            textAnchor="middle"
                        >   Apod Available!
                    </Text>
                    </Svg>
                </ContainerCenter>

            </Container>
        );
    }
}

const Apod = connect()(ApodComponent);

export default Apod;
