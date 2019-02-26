// Interfaces
import { IAction } from '@App/Interfaces/Actions';
import { IDefaultState } from '@App/Interfaces/Defaults';
import { IReducer } from '@App/Interfaces/Reducers';
import AppContainer from '@App/Router';

// Reducer Initial State
const INITIAL_STATE: IDefaultState = AppContainer.router.getStateForAction(AppContainer.router.getActionForPathAndParams('Login'));

export let RouterReducer: IReducer<IDefaultState, {}> = (state: IDefaultState = INITIAL_STATE, action: IAction<{}>) => {
	const nextState = AppContainer.router.getStateForAction(action, state);
	console.log(nextState);
	return nextState || state;
};
