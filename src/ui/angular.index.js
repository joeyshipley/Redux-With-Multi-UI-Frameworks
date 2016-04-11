import '../../assets/styles/site.scss';

import store from '../app/app.store';
import { ACTIONS as ACTIONS } from '../app/calculator/calculator.actions';
import Calculator from '../app/calculator/calculator';

(function() {
  console.log('AngularJS');
  console.log(store.getState());
  console.log(ACTIONS.ADD(1, 2));

  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  );
  store.dispatch(ACTIONS.ADD(1, 2));
  unsubscribe();

  //var calc = new Calculator();
  //calc
  //  .add(1, 2)
  //  .then((result) => {
  //    console.log(result);
  //  })
  //  .catch((err) => { console.log(err); });
}());