import * as React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PostActions } from "@Actions";
import { isLoading } from "@Definitions";
import { Card } from "@Components";
import { IStore } from "@Interfaces";

export const Home: React.FC = () => {
    const dispatch = useDispatch();

    const postList = useSelector((state: IStore) => state.post.list);

    React.useEffect(() => {
        (async () => {
            dispatch(await PostActions.List());
        })();
    }, [dispatch]);

    const renderContent = () => {
        if (isLoading(postList.status)) {
            return (
                <View>
                    <Text>loading...</Text>
                </View>
            );
        }

        return (
            <ScrollView>
                {postList.data.map(post => (
                    <Card p={10} key={post.id} title={post.title} />
                ))}
            </ScrollView>
        );
    };

    return (
        <SafeAreaView>
            <View>{renderContent()}</View>
        </SafeAreaView>
    );
};
