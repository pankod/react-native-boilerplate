import { AppRegistry } from 'react-native';
import { App } from './src/App/App';
import { name as appName } from './app.json';

// To see all the requests in the chrome Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
	GLOBAL.originalXMLHttpRequest :
	GLOBAL.XMLHttpRequest;

global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
	return global._fetch(uri, options, ...args).then((response) => {
		console.log('Fetch', { request: { uri, options, ...args }, response });
		return response;
	});
};

AppRegistry.registerComponent(appName, () => App);
