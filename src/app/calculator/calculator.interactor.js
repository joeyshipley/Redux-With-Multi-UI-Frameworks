// NOTE: outside the 'pure' boundry, this side deals with async actions and other various non-pure calls.

import { Promise as Promise } from 'es6-promise';
import store from '../app.store';
import { ACTIONS as ACTIONS } from './calculator.actions';

class CalculatorInteractor {
  constructor() {}

  add(value1, value2) {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.ADD(value1, value2);
      var dispatched = store.dispatch(result);
      return resolve(dispatched);
    });
  }

  subtract(value1, value2) {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.SUBTRACT(value1, value2);
      var dispatched = store.dispatch(result);
      return resolve(dispatched);
    });
  }

}
export default CalculatorInteractor;