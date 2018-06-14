import { connect, Dispatch } from 'react-redux';

import { decrementEnthusiasm, EnthusiasmAction, incrementEnthusiasm } from '../actions';
import Hello from '../components/Hello/Hello';
import { IStoreState } from '../types';

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onIncrement: () => dispatch(incrementEnthusiasm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hello);
