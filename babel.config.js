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
                    "@Assets": "./src/Assets",
                    "@Interfaces": "./src/Assets",
                    "@Router": "./src/Router",
                    "@Services": "./src/Services",
                    "@Store": "./src/Store",
                    "@Scenes": "./scenes"
                }
            }
        ],
    ]
};
