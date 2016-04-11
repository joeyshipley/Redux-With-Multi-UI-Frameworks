import '../../assets/styles/site.scss';

import { ACTIONS as ACTIONS } from '../app/calculator/calculator.actions';
import Calculator from '../app/calculator/calculator';

(function() {
  console.log('ReactJS');
  console.log(ACTIONS.ADD(5, 6));

  var calc = new Calculator();
  calc
    .add(5, 6)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => { console.log(err); });

}());