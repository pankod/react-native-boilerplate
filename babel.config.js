module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            "module-resolver",
            {
                "root": [
                    "."
                ],
                "alias": {
                    "@Components": "./src/Components",
                    "@Styled": "./src/Styled",
                    "@Definitions": "./src/Definitions",
                    "@Interfaces": "./src/Interfaces",
                    "@Router": "./src/Router",
                    "@Services": "./src/Services",
                    "@Redux": "./src/Redux",
                    "@Scenes": "./scenes"
                }
            }
        ],
    ]
};
