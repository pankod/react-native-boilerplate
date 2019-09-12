//#region Global Imports
import * as React from "react";
import { View, Text, StyleSheet } from 'react-native';
//#endregion Global Imports


//#region Interface Imports
import { IHeading } from "./Heading";
//#endregion Interface Imports

const styles = StyleSheet.create({
    title: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center'
    },
    back: {
        color: 'grey',
        fontSize: 80,
        fontWeight: 'bold',
        lineHeight: 86,
        zIndex: -1
    },

    front: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
    }

});

const Heading: React.FunctionComponent<IHeading.IProps> = props => {
    const { text } = props;
    return (
        <View style={styles.title}>
            <Text style={styles.front}>{text}</Text>
            <Text style={styles.back}>{text}</Text>
        </View>
    );
};

export { Heading };
