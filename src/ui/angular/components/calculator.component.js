import { Component, View, Input } from 'angular2/core';
import { default as ComponentTemplate } from './calculator.template.html'
import { HeaderComponent } from './header.component.js';
import store from '../../../app/app.store.js';
import CalculatorInteractor from '../../../app/calculator/calculator.interactor.js';

var _storeUnsubscribe;
var _calculatorInteractor = new CalculatorInteractor();
var _localState = {
  operator: ''
};

@Component({
  selector: 'calculator-app',
  template: ComponentTemplate,
  directives: [
    HeaderComponent
  ]
})

export class CalculatorComponent {
  constructor() {
    _storeUnsubscribe = store.subscribe(() =>
      this.refresh(this.state())
    );
    this.refresh(this.state());
  }

  state() {
    return store.getState();
  }

  refresh(state) {
    this.calcDisplayValue = state.calculator.total;
    this.hasCommittedOperator = state.calculator.hasCommittedOperator;
    this.allowOperators = state.calculator.allowOperators;
    this.allowEquals = state.calculator.allowEquals;
  }

  pressNumber(value) {
    _calculatorInteractor.buildNumber(value);
  }

  pressAdd() {
    if(!this.allowOperators || this.hasCommittedOperator) { return; }

    _localState.operator = _calculatorInteractor.add.name;
    _calculatorInteractor.commitOperator();
  }

  pressSubtract() {
    if(!this.allowOperators || this.hasCommittedOperator) { return; }

    _localState.operator = _calculatorInteractor.subtract.name;
    _calculatorInteractor.commitOperator();
  }

  pressEquals() {
    if(!this.allowEquals) { return; }

    _calculatorInteractor[_localState.operator]();
  }
}
