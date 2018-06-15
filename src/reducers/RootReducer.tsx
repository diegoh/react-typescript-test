import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { IStoreState } from '../types';
import EnthusiasmReducer from './EnthusiasmReducer';
import LanguageReducer from './LanguageReducer';

export const reducers: ReducersMapObject<IStoreState> = {
  enthusiasmLevel: EnthusiasmReducer,
  languageName: LanguageReducer,
};

const RootReducer: Reducer<IStoreState> = combineReducers(reducers);

export default RootReducer;
