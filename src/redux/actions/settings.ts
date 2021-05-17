import { SET_THEME } from '../types';

export const setTheme = (value: string): ReduxAction => ({
  type: SET_THEME,
  payload: value,
});
