import { EnthusiasmAction } from '../actions/EnthusiasmActions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants';

export default function EnthusiasmReducer(state: number = 1, action: EnthusiasmAction): number {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return state + 1;

    case DECREMENT_ENTHUSIASM:
      return Math.max(1, state - 1);

    default:
      break;
  }
  return state;
}
