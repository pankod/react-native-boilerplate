// Interfaces
import { IDefaultState } from '@App/Interfaces';
import { IAction, IReducer } from '@App/Interfaces';

// Reducer Initial State
const INITIAL_STATE: IDefaultState = {
	scene: {}
};

export let RouterReducer: IReducer<IDefaultState, {}> = (state: IDefaultState = INITIAL_STATE, action: IAction<{}>) => {
	switch (action.type) {
		default:
			return state;
	}
};
