import { createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';

export interface IStoreState {
  enthusiasmLevel: number;
  languageName: string;
}

export type StoreState = IStoreState;

export const store = createStore<IStoreState, any, any, any>(RootReducer, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
