// Global Imports
import { Reducer } from 'redux';

// Local Imports
import { IAction } from '@App/Interfaces';

type IReducer<S, A> = (state: S, action: IAction<A>) => S;

export interface ICombineReducers {
	[key: string]: Reducer<{}>;
}
