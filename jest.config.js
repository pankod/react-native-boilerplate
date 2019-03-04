const { defaults } = require('jest-config');

module.exports = {
	bail: true,
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	roots: ['.'],
	// testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	verbose: true,
	"moduleDirectories": ["node_modules", "src"]
};
