import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../types';

export const counterReducer = (state = { value: 0 }, action: ReduxAction) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { value: state.value + 1 };
    case COUNTER_DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
