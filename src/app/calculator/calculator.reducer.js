// NOTE: inside 'pure' boundry
// NOTE: immutably handles state changes

import { TYPES as TYPES } from './calculator.actions';

function calculator(state = {}, action) {
  switch (action.type) {
    case TYPES.BUILD_NUMBER:
      return buildNumber(state, action.singleDigit)
    case TYPES.ADD:
      return add(state, state.value1, state.value2)
    case TYPES.SUBTRACT:
      return subtract(state, state.value1, state.value2)
    case TYPES.COMMIT_OPERATOR:
      return commitOperator(state);
    default:
      return state;
  }

  function buildNumber(state, singleDigit) {
    var newState = Object.assign({}, state);

    if(!newState.hasCompletedValue1) {
      newState.value1 += '' + singleDigit;
      newState.total = newState.value1;
    } else {
      newState.value2 += '' + singleDigit;
      newState.total = newState.value2;
    }

    if(newState.value1 !== '')
    {
      newState.allowOperators = true;
    }
    if(newState.value1 !== '' && newState.value2 !== '') {
      newState.allowEquals = true;
    }

    return newState;
  }

  function commitOperator(state) {
    var newState = Object.assign({}, state, {
      hasCompletedValue1: true,
      hasCommittedOperator: true
    });

    return newState;
  }

  function add(state, value1, value2) {
    var newState = Object.assign({}, state, resetCalcState());

    newState.total = Number.parseInt(value1) + Number.parseInt(value2);

    return newState;
  }

  function subtract(state, value1, value2) {
    var newState = Object.assign({}, state, resetCalcState());

    newState.total = Number.parseInt(value1) - Number.parseInt(value2);

    return newState;
  }

  function resetCalcState() {
    return {
      value1: '',
      value2: '',
      hasCompletedValue1: false,
      hasCompletedValue2: false,
      hasCommittedOperator: false,
      allowOperators: false,
      allowEquals: false,
    };
  }
}

export default calculator;