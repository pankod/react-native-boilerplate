module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["."],
                alias: {
                    "@Actions": "./src/Actions",
                    "@Components": "./src/Components",
                    "@Definitions": "./src/Definitions",
                    "@Interfaces": "./src/Interfaces",
                    "@Redux": "./src/Redux",
                    "@Services": "./src/Services",
                    "@Screens": "./src/Screens",
                },
            },
        ],
    ],
};
