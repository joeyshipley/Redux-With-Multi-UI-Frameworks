import '../../assets/styles/site.scss';

import { ACTIONS as actions } from '../app/actions';
import Calculator from '../app/calculator';

(function() {
  console.log('AngularJS');
  console.log(actions.CALC.ADD(1, 2));

  var calc = new Calculator();
  calc
    .add(1, 2)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => { console.log(err); });
}());