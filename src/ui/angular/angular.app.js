import '../../../assets/styles/site.scss';
import 'zone.js';
import 'reflect-metadata';
import { bootstrap } from 'angular2/platform/browser';
import { CalculatorComponent } from './components/calculator.component.js';
import LocalizationInteractor from '../../app/localization/localization.interactor';

var _localizationInteractor = new LocalizationInteractor();

_localizationInteractor.english();

bootstrap(CalculatorComponent, [])
  .catch(err => console.error(err));