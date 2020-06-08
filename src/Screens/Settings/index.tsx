import * as React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";

export const Settings: React.FC = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>{t("common:Hello")}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
