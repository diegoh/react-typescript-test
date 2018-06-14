import { EnthusiasmAction } from '../actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants';

export default function EnthusiasmReducer(state: number = 1, action: EnthusiasmAction): number {
  switch (action.type) {
    case DECREMENT_ENTHUSIASM:
      return Math.max(1, state - 1);

    case INCREMENT_ENTHUSIASM:
      return state + 1;
  }
}
