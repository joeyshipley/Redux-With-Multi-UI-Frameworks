import '../../assets/styles/site.scss';

import { Promise as Promise } from 'es6-promise';
import store from '../app/app.store';
import CalculatorInteractor from '../app/calculator/calculator.interactor';
const calculator = new CalculatorInteractor();

(function() {
  console.log('ReactJS');

  let unsubscribe = store.subscribe(() => {
    //console.log(store.getState())
  });



  unsubscribe();
}());
