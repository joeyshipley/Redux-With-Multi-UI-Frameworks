import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import HeaderComponent from './header.jsx';
import LocalizationInteractor from '../../../app/localization/localization.interactor.js';
import CalculatorInteractor from '../../../app/calculator/calculator.interactor.js';

var _calculatorInteractor = new CalculatorInteractor();
var _localState = {
  operator: ''
};

const mapStateToProps = (state) => {
  return {
    text: state.localization,
    calcDisplayValue: state.calculator.total,
    hasCommittedOperator: state.calculator.hasCommittedOperator,
    allowOperators: state.calculator.allowOperators,
    allowEquals: state.calculator.allowEquals
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    pressNumber: (value) => {
      _calculatorInteractor.buildNumber(value);
    },
    pressAdd: () => {
      _localState.operator = _calculatorInteractor.add.name;
      _calculatorInteractor.commitOperator();
    },
    pressSubtract: () => {
      _localState.operator = _calculatorInteractor.subtract.name;
      _calculatorInteractor.commitOperator();
    },
    pressEquals: () => {
      _calculatorInteractor[_localState.operator]();
    }
  }
};

const Calculator = ({
  text, calcDisplayValue,
  hasCommittedOperator, allowOperators, allowEquals,
  pressNumber, pressAdd, pressSubtract, pressEquals
}) => (
  <div>
    <HeaderComponent />

    <div id="calc-container">
      <div className="calc-total">{ calcDisplayValue }</div>
      <div className="calc-numbers">
        <span className="calc-button" onClick={ pressNumber.bind(this, 9) }>9</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 8) }>8</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 7) }>7</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 6) }>6</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 5) }>5</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 4) }>4</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 3) }>3</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 2) }>2</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 1) }>1</span>
        <span className="calc-button" onClick={ pressNumber.bind(this, 0) }>0</span>
      </div>
      <div className="calc-operators">
        <div>{ hasCommittedOperator }</div>
        <span className={ "calc-button" + ((!allowOperators || hasCommittedOperator) ? " disabled" : "") }
          onClick={ (allowOperators && !hasCommittedOperator) ? pressAdd : () => {} }
        >+</span>
        <span className={ "calc-button" + ((!allowOperators || hasCommittedOperator) ? " disabled" : "") }
          onClick={ (allowOperators && !hasCommittedOperator) ? pressSubtract : () => {} }
        >-</span>
        <span className={ "calc-button" + (!allowEquals ? " disabled" : "") }
          onClick={ allowEquals ? pressEquals : () => {} }
        >=</span>
      </div>
    </div>
  </div>
);

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

export default CalculatorContainer