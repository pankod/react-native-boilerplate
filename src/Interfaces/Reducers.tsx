// Global Imports
import { Reducer } from 'redux';

// Local Imports
import { IAction } from '@Interfaces/Actions';

export type IReducer<S, A> = (state: S, action: IAction<A>) => S;

export interface ICombineReducers {
	[key: string]: Reducer<{}>;
}
