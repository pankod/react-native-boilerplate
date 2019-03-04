// Global Imports
import { DrawerActions, NavigationActions, StackActions } from 'react-navigation';

// Local Imports

module RouterActions {
	let navigatorRef: object;
	let stack: Array<object> = [];

	export const setNavigationReference = (navigation: object): void => {
		navigatorRef = navigation;
	};

	export const push = (screen: string, props: object = {}): void => {
		stack.push({
			routeName: screen,
			params: props
		});

		navigatorRef.dispatch(
			NavigationActions.navigate({
				params: props,
				routeName: screen
			})
		);
	};

	export const replace = (screen: string, props: object = {}): void => {
		stack = [{
			routeName: screen,
			params: props
		}];

		const resetAction = StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: screen, params: props })
			]
		});
		navigatorRef.dispatch(resetAction);
	};

	export const pop = (): void => {
		stack.pop();

		const backAction = NavigationActions.back();
		navigatorRef.dispatch(backAction);
	};

	export const currentState = (): object => stack[stack.length - 1];

	export const drawerToggle = (): void => {
		navigatorRef.dispatch(
			DrawerActions.toggleDrawer()
		);
	};
}

export default RouterActions;
