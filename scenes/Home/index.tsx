// Global Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RouterActions from '@Services/RouterActions';


// Local Styles
import {
    Container,
    Apod,
    ApodButton,
    TopText,
    ApodText,
    Middle,
    Centered,
    Buttons,
} from "@Styled/Home";
const styles = StyleSheet.create({
    stretch: {
        width: Dimensions.get('window').width - 50,
        resizeMode: 'contain',
    }
});

import { Heading } from "@Components";

class HomeComponent extends Component {
    renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <TouchableOpacity
                key={lang}
                onPress={() => console.log(lang)}
            >
                <Text>
                    {lang}
                </Text>
            </TouchableOpacity>
        ));
    public render(): JSX.Element {
        return (
            <Container>
                <Image
                    style={styles.stretch}
                    source={require('/static/images/pankod-logo.png')}
                />
                <Middle>
                    <Centered>
                        {/* <TopText>Hello</TopText> */}
                        <Heading text={'Hello World'} />
                        <Buttons>
                            {this.renderLocaleButtons('tr ')}
                        </Buttons>
                    </Centered>
                    <Apod>
                        <ApodButton
                            onPress={() => RouterActions.push('Apod')}
                        >
                            <ApodText>Discover Space</ApodText>
                        </ApodButton>
                    </Apod>

                </Middle>
            </Container>
        );
    }
}

const Home = connect()(HomeComponent);

export default Home;
