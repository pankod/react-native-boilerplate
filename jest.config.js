module.exports = {
    preset: "react-native",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["node_modules", "src"],
    setupFiles: ["<rootDir>/test/jest.setup.ts"],
    globals: {
        "ts-jest": {
            tsConfigFile: "<rootDir>/test/tsconfig.jest.json",
        },
    },
};
