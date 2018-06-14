import EnthusiasmReducer from './EnthusiasmReducer';
import LanguageReducer from './LanguageReducer';
import { reducers } from './RootReducer';

describe('RootReducer', () => {
  it('returns a combined reducer', () => {
    const expectedReducers = {
      enthusiasm: EnthusiasmReducer,
      languageName: LanguageReducer,
    };

    expect(typeof reducers.enthusiasm).toBe(typeof expectedReducers.enthusiasm);
    expect(typeof reducers.languageName).toBe(typeof expectedReducers.languageName);
    expect(reducers).toMatchObject(expectedReducers);
  });
});
