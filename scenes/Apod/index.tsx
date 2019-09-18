// #region Global Imports
import * as React from "react";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";
// #endregion Global Imports

// #region Local Imports
import { Container, ApodImage } from "./styled";
import { ContainerCenter } from "@Styled";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

const Apod: React.FunctionComponent<IHomePage.IProps> = () => {
    const home = useSelector((state: IStore) => state.home);
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
                        resizeMode="contain"
                    />
                )}
            </ContainerCenter>
        </Container>
    );
};

export default Apod;
