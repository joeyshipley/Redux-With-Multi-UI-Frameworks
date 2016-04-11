import '../../assets/styles/site.scss';

import { Promise as Promise } from 'es6-promise';
import store from '../app/app.store';
import CalculatorInteractor from '../app/calculator/calculator.interactor';
const calculator = new CalculatorInteractor();

(function() {
  console.log('AngularJS');

  let unsubscribe = store.subscribe(() => {
    //console.log(store.getState())
  });

  add()
    .then(subtract)
    .catch((err) => { console.log(err); reject(err); })

  unsubscribe();
}());

function add() {
  return new Promise((resolve, reject) => {
    return calculator
      .add(1, 1)
      .then(() => {
        console.log(' ===[ ADD COMPLETED ]=== ');
        console.log(store.getState().calculator);
        return resolve(true);
      })
    .catch((err) => { console.log(err); reject(err); })
  });
}

function subtract() {
  return new Promise((resolve, reject) => {
    return calculator
      .subtract(11, 1)
      .then(() => {
        console.log(' ===[ SUBTRACT COMPLETED ]=== ');
        console.log(store.getState().calculator);
        return resolve(true);
      })
    .catch((err) => { console.log(err); reject(err); })
  });
}
