import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import {
  decrementEnthusiasm,
  IDecrementEnthusiasm,
  incrementEnthusiasm,
  IncrementEnthusiasm,
} from '../actions/EnthusiasmActions';
import * as constants from '../constants';
import { IStoreState, store } from '../types';
import Hello, { IConnectedHelloDispatch, mapDispatchToProps, mapStateToProps } from './Hello';

describe('Hello Container', () => {
  let container: ReactWrapper<any, any>;

  beforeEach(() => {
    container = mount(
      <Provider store={store}>
        <Hello />
      </Provider>,
    );
  });

  it('renders successfully', () => {
    expect(container).toExist();
  });

  it('receives the expected state', () => {
    const state: IStoreState = {
      enthusiasmLevel: 10,
      languageName: 'JavaScript',
    };
    expect(mapStateToProps(state).enthusiasmLevel).toEqual(10);
    expect(mapStateToProps(state).languageName).toEqual('JavaScript');
  });

  describe('mapDispatchToProps', () => {
    it('passes increase and decrease enthusiasm actions', () => {
      const dispatch = jest.fn();
      const expected: IConnectedHelloDispatch = {
        onDecrement: (): IDecrementEnthusiasm => decrementEnthusiasm(),
        onIncrement: (): IncrementEnthusiasm => incrementEnthusiasm(),
      };
      expect(typeof mapDispatchToProps(dispatch)).toBe(typeof expected);
    });

    it('passes increase and decrease enthusiasm actions', () => {
      const dispatch = jest.fn();
      const expected: IConnectedHelloDispatch = {
        onDecrement: () => dispatch(decrementEnthusiasm()),
        onIncrement: () => dispatch(incrementEnthusiasm()),
      };
      const received: IConnectedHelloDispatch = mapDispatchToProps(dispatch);

      expect(received.onIncrement()).toEqual(expected.onIncrement());
      expect(received.onDecrement()).toEqual(expected.onDecrement());
    });

    it('fires increase enthusiasm action', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onIncrement();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: constants.INCREMENT_ENTHUSIASM });
    });

    it('fires descrease enthusiasm action', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onDecrement();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: constants.DECREMENT_ENTHUSIASM });
    });
  });
});
