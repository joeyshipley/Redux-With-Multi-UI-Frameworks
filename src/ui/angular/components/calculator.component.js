import { Component, View, Input } from 'angular2/core';

@Component({
  selector: 'calculator-app',
  template: '<p>{{ message }}</p>'
})

export class CalculatorComponent {
  constructor() {
    this.message = 'Hello World!';
  }
}
