// Global Imports
import React, { Component } from 'react';
import { SvgUri, Text, Svg } from 'react-native-svg';
import { connect } from 'react-redux';

// Local Styles
import { ContainerCenter } from '@Assets/Styles';

class HomeComponent extends Component {
    public render(): JSX.Element {
        return (
            <ContainerCenter>
                <Svg height="100" width="200">
                    <Text
                        fill="none"
                        stroke="blue"
                        fontSize="30"
                        fontWeight="bold"
                        x="100"
                        y="30"
                        textAnchor="middle"
                    >   SVG Available!
                    </Text>
                </Svg>
            </ContainerCenter>
        );
    }
}

const Home = connect()(HomeComponent);

export default Home;
