// Interfaces
import { IDefaultState } from '@App/Interfaces';
import { IAction, IReducer } from '@App/Interfaces';

// Reducer Initial State
const INITIAL_STATE: IDefaultState = {
	App: {}
};

export let InitReducer: IReducer<IDefaultState, {}> = (state: IDefaultState = INITIAL_STATE, action: IAction<{}>) => {
	switch (action.type) {
		default:
			return state;
	}
};
