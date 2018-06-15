import 'jest-enzyme';
import { changeLanguage } from '../actions/LanguageActions';
import LanguageReducer from './LanguageReducer';

describe('LanguageReducer', () => {
  it('returns an empty string by default', () => {
    const initial = undefined;
    const expected = '';
    expect(LanguageReducer(initial, changeLanguage())).toEqual(expected);
  });

  it('updates the language if provided', () => {
    const initial = undefined;
    const expected = 'Hello!';
    expect(LanguageReducer(initial, changeLanguage('Hello!'))).toEqual(expected);
  });

  it('returns an empty string if payload is empty', () => {
    const initial = 'OLD';
    const expected = 'Hello!';
    expect(LanguageReducer(initial, changeLanguage('Hello!'))).toEqual(expected);
  });
});
