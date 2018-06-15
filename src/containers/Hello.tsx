import { connect, Dispatch } from 'react-redux';

import {
  decrementEnthusiasm,
  EnthusiasmAction,
  IDecrementEnthusiasm,
  incrementEnthusiasm,
  IncrementEnthusiasm,
} from '../actions/EnthusiasmActions';
import Hello from '../components/Hello/Hello';
import { IStoreState } from '../types';

export interface IConnectedHelloDispatch {
  onDecrement: () => IDecrementEnthusiasm;
  onIncrement: () => IncrementEnthusiasm;
}

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState): IStoreState {
  return {
    enthusiasmLevel,
    languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>): IConnectedHelloDispatch {
  return {
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onIncrement: () => dispatch(incrementEnthusiasm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hello);
