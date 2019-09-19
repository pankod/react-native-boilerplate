module.exports = {
    preset: "react-native",
    moduleDirectories: ["node_modules", "src", "scenes"],
    setupFiles: ["<rootDir>/test/jest.setup.ts"],
    globals: {
        "ts-jest": {
            tsConfigFile: "<rootDir>/test/tsconfig.jest.json",
        },
    },
};
