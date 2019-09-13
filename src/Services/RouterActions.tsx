// Global Imports
import {
    DrawerActions,
    NavigationActions,
    StackActions,
} from "react-navigation";

// Local Imports
interface INavigator {
    dispatch: Function;
}
let navigatorRef: INavigator;
let stack: Array<object> = [];

export const RouterActions = {
    setNavigationReference: (navigation: INavigator): void => {
        navigatorRef = navigation;
    },
    push: (screen: string, props: object = {}): void => {
        stack.push({
            routeName: screen,
            params: props,
        });

        navigatorRef.dispatch(
            NavigationActions.navigate({
                params: props,
                routeName: screen,
            })
        );
    },
    replace: (screen: string, props: object = {}): void => {
        stack = [
            {
                routeName: screen,
                params: props,
            },
        ];

        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: screen,
                    params: props,
                }),
            ],
        });
        navigatorRef.dispatch(resetAction);
    },
    pop: (): void => {
        stack.pop();

        const backAction = NavigationActions.back();
        navigatorRef.dispatch(backAction);
    },
    currentState: (): object => stack[stack.length - 1],
    drawerToggle: (): void => {
        navigatorRef.dispatch(DrawerActions.toggleDrawer());
    },
};

export default RouterActions;
