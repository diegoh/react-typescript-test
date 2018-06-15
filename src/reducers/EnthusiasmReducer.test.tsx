import 'jest-enzyme';
import {
  decrementEnthusiasm,
  IDecrementEnthusiasm,
  IncrementEnthusiasm,
  incrementEnthusiasm,
} from '../actions/EnthusiasmActions';
import EnthusiasmReducer from './EnthusiasmReducer';

describe('EnthusiasmReducer', () => {
  let incrementAction: IncrementEnthusiasm;
  let decrementAction: IDecrementEnthusiasm;

  beforeAll(() => {
    incrementAction = incrementEnthusiasm();
    decrementAction = decrementEnthusiasm();
  });
  it('returns 1 if incrementing the first time without an initial value', () => {
    const initial = undefined;
    const expected = 2;
    expect(EnthusiasmReducer(initial, incrementAction)).toEqual(expected);
  });
  it('increases when the increment action is called', () => {
    const initial = 100;
    const expected = 101;

    expect(EnthusiasmReducer(initial, incrementAction)).toEqual(expected);
  });

  describe('decrement action', () => {
    it('decreases the value', () => {
      const initial = 3;
      const expected = 2;

      expect(EnthusiasmReducer(initial, decrementAction)).toEqual(expected);
    });
    it('returns minimum value 1', () => {
      const initial = 1;
      const expected = 1;

      expect(EnthusiasmReducer(initial, decrementAction)).toEqual(expected);
    });
    it('returns minimum value of 1 if given 0', () => {
      const initial = 0;
      const expected = 1;

      expect(EnthusiasmReducer(initial, decrementAction)).toEqual(expected);
    });
    it('returns 1 given a negative', () => {
      const initial = -100;
      const expected = 1;

      expect(EnthusiasmReducer(initial, decrementAction)).toEqual(expected);
    });
  });
});
