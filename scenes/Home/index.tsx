// Global Imports
import * as React from "react";
import { IHomePage } from "@Interfaces";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";

import { useSelector, useDispatch } from "react-redux";

import {
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import RouterActions from "@Services/RouterActions";

// Local Styles
import {
    Container,
    Apod,
    ApodButton,
    ApodText,
    Middle,
    Centered,
    Buttons,
} from "./styled";
import { Heading } from "@Components";

const styles = StyleSheet.create({
    stretch: {
        width: Dimensions.get("window").width - 50,
        resizeMode: "contain",
    },
});

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <TouchableOpacity key={lang} onPress={() => console.log(lang)}>
                <Text>{lang}</Text>
            </TouchableOpacity>
        ));

    const handleApod = () => {
        console.log("butona tıklandı");

        RouterActions.push("Apod");
        dispatch(
            HomeActions.GetApod({
                params: { hd: false },
            })
        );
    };

    return (
        <Container>
            <Image
                style={styles.stretch}
                source={require("/static/images/pankod-logo.png")}
            />
            <Middle>
                <Centered>
                    <Heading text={"Hello World"} />
                    <Buttons>{renderLocaleButtons("tr ")}</Buttons>
                </Centered>
                <Apod>
                    <ApodButton onPress={() => handleApod()}>
                        <ApodText>Discover Space </ApodText>
                    </ApodButton>
                </Apod>
            </Middle>
        </Container>
    );
};

export default Home;
