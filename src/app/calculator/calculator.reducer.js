import { TYPES as TYPES } from './calculator.actions';
import Calculator from './calculator';

const initial_state = {
  total: 0
};

function calculatorReducer(state = initialState, action) {
  let calculator = new Calculator();

  switch (action.type) {
    case TYPES.ADD:
      return Object.assign({}, state, {
        value1: undefined,
        value2: undefined,
        total: calculator.add(state.value1, state.value2)
      });
    case TYPES.SUBTRACT:
      return Object.assign({}, state, {
        value1: undefined,
        value2: undefined,
        total: calculator.subtract(state.value1, state.value2)
      });
    default:
      return state;
  }
}

export default calculatorReducer;