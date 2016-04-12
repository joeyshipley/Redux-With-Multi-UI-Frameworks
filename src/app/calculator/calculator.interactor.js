// NOTE: outside the 'pure' boundry, this side deals with async actions and other various non-pure calls.

import { Promise as Promise } from 'es6-promise';
import store from '../app.store';
import { ACTIONS as ACTIONS } from './calculator.actions';

class CalculatorInteractor {
  constructor() {}

  commitOperator() {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.COMMIT_OPERATOR();
      var dispatched = store.dispatch(result);
      return resolve(dispatched);
    });
  }

  buildNumber(singleDigit) {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.BUILD_NUMBER(singleDigit);
      var dispatched = store.dispatch(result);
      return resolve(dispatched);
    });
  }

  add() {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.ADD();
      var dispatched = store.dispatch(result);
      return resolve(dispatched);
    });
  }

  subtract() {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.SUBTRACT();
      var dispatched = store.dispatch(result);
      return resolve(dispatched);
    });
  }

}
export default CalculatorInteractor;