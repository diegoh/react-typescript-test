import 'jest-enzyme';
import {
  decrementEnthusiasm,
  IDecrementEnthusiasm,
  IncrementEnthusiasm,
  incrementEnthusiasm,
} from '../actions';
import EnthusiasmReducer from './EnthusiasmReducer';

describe('EnthusiasmReducer', () => {
  let incrementAction: IncrementEnthusiasm;
  let decrementAction: IDecrementEnthusiasm;

  beforeAll(() => {
    incrementAction = incrementEnthusiasm();
    decrementAction = decrementEnthusiasm();
  });
  it('returns 2 if incrementing the first time without an initial value', () => {
    expect(EnthusiasmReducer(undefined, incrementAction)).toEqual(2);
  });
  it('increases when the increment action is called', () => {
    expect(EnthusiasmReducer(100, incrementAction)).toEqual(101);
  });

  describe('decrement action', () => {
    it('decreases the value', () => {
      expect(EnthusiasmReducer(3, decrementAction)).toEqual(2);
    });
    it('returns minimum value 1', () => {
      expect(EnthusiasmReducer(1, decrementAction)).toEqual(1);
    });
    it('returns 1 given a negative', () => {
      expect(EnthusiasmReducer(-100, decrementAction)).toEqual(1);
    });
  });
});
