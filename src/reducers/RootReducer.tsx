import { combineReducers, Reducer } from 'redux';

import { IStoreState } from '../types';
import EnthusiasmReducer from './EnthusiasmReducer';
import LanguageReducer from './LanguageReducer';

export const reducers = {
  enthusiasm: EnthusiasmReducer,
  languageName: LanguageReducer,
};

const RootReducer = combineReducers<Reducer<IStoreState>>(reducers);

export default RootReducer;
