import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Promise as Promise } from 'es6-promise';

import HeaderComponent from './header.jsx';

import LocalizationInteractor from '../../../app/localization/localization.interactor.js';
import CalculatorInteractor from '../../../app/calculator/calculator.interactor.js';

const _calculatorInteractor = new CalculatorInteractor();

const mapStateToProps = (state) => {
  return {
    text: state.localization
  }
};

const Calculator = ({ text }) => (
  <div>
    <HeaderComponent />

    <div>
      <h3>Hello World!</h3>
    </div>
  </div>
);

const CalculatorContainer = connect(
  mapStateToProps
)(Calculator);

export default CalculatorContainer