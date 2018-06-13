import { createStore } from 'redux';
import { EnthusiasmAction } from '../actions';
import { IStoreState } from '../types/index';
import { enthusiasm } from './EnthusiasmReducer';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

export default store;
