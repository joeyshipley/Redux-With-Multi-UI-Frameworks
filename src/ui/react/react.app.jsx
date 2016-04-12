import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory } from 'react-router'
import store from '../../app/app.store';

import '../../../assets/styles/site.scss';
import CalculatorComponent from './components/calculator.component.jsx';

import LocalizationInteractor from '../../app/localization/localization.interactor';
const _localizationInteractor = new LocalizationInteractor();

(function init() {

  _localizationInteractor.english();

}());

render(

  <Provider store={store}>
    <Router history={hashHistory}>
      <Route name="root" path="/" component={ CalculatorComponent }/>
    </Router>
  </Provider>

  , document.getElementById('page-content')
);