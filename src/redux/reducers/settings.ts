import { SET_THEME } from '../types';

export const settingsReducer = (
  state = { theme: 'light' },
  action: ReduxAction,
) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return { ...state };
  }
};
