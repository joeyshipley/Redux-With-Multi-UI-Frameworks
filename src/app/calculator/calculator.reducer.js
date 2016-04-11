// NOTE: inside 'pure' boundry
// NOTE: immutably handles state changes

import { TYPES as TYPES } from './calculator.actions';

function calculator(state = {}, action) {
  switch (action.type) {
    case TYPES.ADD:
      return Object.assign({}, state, {
        value1: undefined,
        value2: undefined,
        total: add(action.value1, action.value2)
      });
    case TYPES.SUBTRACT:
      return Object.assign({}, state, {
        value1: undefined,
        value2: undefined,
        total: subtract(action.value1, action.value2)
      });
    default:
      return state;
  }

  function add(value1, value2) {
    return value1 + value2;
  }

  function subtract(value1, value2) {
    return value1 - value2;
  }
}

export default calculator;