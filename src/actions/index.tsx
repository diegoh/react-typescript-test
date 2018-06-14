import * as constants from '../constants';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface IChangeLanguage {
  payload: string;
  type: constants.CHANGE_LANGUAGE;
}

export type EnthusiasmAction = IncrementEnthusiasm | IDecrementEnthusiasm;

export type ChangeLanguage = IChangeLanguage;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
}

export function changeLanguage(language: string = ''): IChangeLanguage {
  return {
    payload: language,
    type: constants.CHANGE_LANGUAGE,
  };
}
