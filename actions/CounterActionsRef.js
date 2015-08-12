// Using references, just the same...
import { INCREMENT_COUNTER_REF, DECREMENT_COUNTER_REF } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER_REF
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER_REF
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
