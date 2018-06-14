import 'jest-enzyme';
import { changeLanguage } from '../actions';
import LanguageReducer from './LanguageReducer';

describe('LanguageReducer', () => {
  it('returns an empty string by default', () => {
    expect(LanguageReducer(changeLanguage())).toBe('');
  });

  it('updates the language if provided', () => {
    expect(LanguageReducer(changeLanguage('Hello!'))).toBe('Hello!');
  });

  it('returns an empty string if payload is empty', () => {
    expect(LanguageReducer(changeLanguage('Hello!'))).toBe('Hello!');
  });
});
