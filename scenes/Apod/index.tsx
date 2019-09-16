// Global Imports
import * as React from "react";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

// Local Styles
import { Container, ApodImage } from "./styled";
import { ContainerCenter } from "@Styled";
import { IHomePage } from "@Interfaces";

const Apod: React.FunctionComponent<IHomePage.IProps> = () => {
    const home = useSelector((state: IStore) => state.home);
    console.log("home.image.url", home.image.url);

    return (
        <Container>
            <ContainerCenter>
                {home.image.url === "" ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <ApodImage
                        source={{
                            uri: home.image.url,
                        }}
                        resizeMode={"contain"}
                    />
                )}
            </ContainerCenter>
        </Container>
    );
};

export default Apod;
