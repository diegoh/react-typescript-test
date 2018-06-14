import EnthusiasmReducer from './EnthusiasmReducer';
import LanguageReducer from './LanguageReducer';
import { reducers } from './RootReducer';

describe('RootReducer', () => {
  it('returns a combined reducer', () => {
    const combinedReducers = {
      enthusiasm: EnthusiasmReducer,
      languageName: LanguageReducer,
    };

    expect(reducers).toBe(typeof combinedReducers);
  });
});
