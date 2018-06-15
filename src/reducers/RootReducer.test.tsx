import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { IStoreState } from '../types';
import EnthusiasmReducer from './EnthusiasmReducer';
import LanguageReducer from './LanguageReducer';
import RootReducer, { reducers } from './RootReducer';

describe('RootReducer', () => {
  let expectedReducers: ReducersMapObject<IStoreState>;
  let expected: Reducer<IStoreState>;

  beforeAll(() => {
    expectedReducers = {
      enthusiasmLevel: EnthusiasmReducer,
      languageName: LanguageReducer,
    };
    expected = combineReducers(expectedReducers);
  });

  it('returns a combined reducer', () => {
    const received = RootReducer.toString();
    const expectedStr = expected.toString();
    expect(received).toBe(expectedStr);
  });

  it('receives the correct reducers', () => {
    expect(reducers).toEqual(expectedReducers);
  });
});
