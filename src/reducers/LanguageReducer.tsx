import { ChangeLanguage } from '../actions';
import { CHANGE_LANGUAGE } from '../constants';

export default function LanguageReducer(action: ChangeLanguage): string {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
  }
}
