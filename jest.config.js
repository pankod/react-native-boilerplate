module.exports = {
    preset: "react-native",
    moduleDirectories: ["node_modules", "src", "scenes"],
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    globals: {
        "ts-jest": {
            tsConfigFile: "<rootDir>/test/tsconfig.jest.json",
        },
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/test/mocks.ts",
        "\\.(css|less|scss|html)$": "<rootDir>/test/mocks.ts",
        "^@(Test)(.*)$": "<rootDir>/test/$2",
        "^@([A-Z].*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["node_modules/?!(react-native)"],
};
