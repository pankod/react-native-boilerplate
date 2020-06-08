import * as React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";

import { Settings as SettingsIcon } from "@Components/Icons";

export const Settings: React.FC = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <SettingsIcon width="50" height="50" fill="red" />
                    <Text>{t("common:Hello")}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
