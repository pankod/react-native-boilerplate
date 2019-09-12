// Interfaces
import { IDefaultState } from '@Interfaces/Defaults';
import { IAction } from '@Interfaces/Actions';
import { IReducer } from '@Interfaces/Reducers';

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
