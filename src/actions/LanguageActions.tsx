import * as constants from '../constants';

export interface IChangeLanguage {
  payload: string;
  type: constants.CHANGE_LANGUAGE;
}

export type ChangeLanguage = IChangeLanguage;

export function changeLanguage(language: string = ''): IChangeLanguage {
  return {
    payload: language,
    type: constants.CHANGE_LANGUAGE,
  };
}
