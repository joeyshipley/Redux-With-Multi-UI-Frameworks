require('./assets/styles/site.scss');

import Calculator from './src/calculator';

(function() {
  console.log('ReactJS');

  var calc = new Calculator();
  calc
    .add(5, 6)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => { console.log(err); });

}());