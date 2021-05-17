import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../types';

export const increment = (): ReduxAction => ({ type: COUNTER_INCREMENT });

export const decrement = (): ReduxAction => ({ type: COUNTER_DECREMENT });
