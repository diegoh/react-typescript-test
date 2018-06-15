import { ChangeLanguage } from '../actions/LanguageActions';
import { CHANGE_LANGUAGE } from '../constants';

export default function LanguageReducer(state: string = '', action: ChangeLanguage): string {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;

    default:
      break;
  }
  return state;
}
