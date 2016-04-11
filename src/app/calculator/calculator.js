class Calculator {
  constructor() {}

  add(value1, value2) {
    console.log(value1);
    console.log(value2);
    var result = value1 + value2;
    console.log(result);
    return result;
  }

  subract(value1, value2) {
    var result = value1 - value2;
    return result;
  }
}
export default Calculator;