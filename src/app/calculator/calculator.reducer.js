import { TYPES as TYPES } from './calculator.actions';
import Calculator from './calculator';

const initial_state = {
  value1: undefined,
  value2: undefined,
  total: 0
};

function calculator(state = initial_state, action) {
  let calculator = new Calculator();

  switch (action.type) {
    case TYPES.ADD:
      return Object.assign({}, state, {
        value1: undefined,
        value2: undefined,
        total: calculator.add(action.value1, action.value2)
      });
    case TYPES.SUBTRACT:
      return Object.assign({}, state, {
        value1: undefined,
        value2: undefined,
        total: calculator.subtract(action.value1, action.value2)
      });
    default:
      return state;
  }
}

export default calculator;