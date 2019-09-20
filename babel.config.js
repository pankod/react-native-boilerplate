module.exports = {
    presets: [
        "module:metro-react-native-babel-preset",
        "module:react-native-dotenv",
    ],
    plugins: [
        [
            "module-resolver",
            {
                root: ["."],
                alias: {
                    "@Actions": "./src/Actions",
                    "@Components": "./src/Components",
                    "@Styled": "./src/Styled",
                    "@Definitions": "./src/Definitions",
                    "@Interfaces": "./src/Interfaces",
                    "@I18n": ["./src/I18n"],
                    "@Router": "./src/Router",
                    "@Services": "./src/Services",
                    "@Redux": "./src/Redux",
                    "@Scenes": "./scenes",
                },
            },
        ],
    ],
};
