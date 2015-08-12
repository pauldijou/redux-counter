import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_REF, DECREMENT_COUNTER_REF } from '../constants/ActionTypes';

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  case INCREMENT_COUNTER_REF:
    return state + 1;
  case DECREMENT_COUNTER_REF:
    return state - 1;
  default:
    return state;
  }
}
