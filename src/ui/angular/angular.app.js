import '../../../assets/styles/site.scss';
import 'zone.js';
import 'reflect-metadata';
import { bootstrap } from 'angular2/platform/browser';
import { CalculatorComponent } from './components/calculator.component.js';

bootstrap(CalculatorComponent, [])
  .catch(err => console.error(err));