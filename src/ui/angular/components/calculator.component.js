import { Component, View, Input } from 'angular2/core';

@Component({
  selector: 'calculator-app',
  template: '<div>'
    + '<h1>Angular2 + Redux</h1>'
    + '<p>{{ message }}</p>'
    + '</div>'
})

export class CalculatorComponent {
  constructor() {
    this.message = 'Hello World!';
  }
}
