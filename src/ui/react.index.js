import '../../assets/styles/site.scss';

import { ACTIONS as actions } from '../app/actions';
import Calculator from '../app/calculator';

(function() {
  console.log('ReactJS');
  console.log(actions.CALC.ADD(5, 6));

  var calc = new Calculator();
  calc
    .add(5, 6)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => { console.log(err); });

}());