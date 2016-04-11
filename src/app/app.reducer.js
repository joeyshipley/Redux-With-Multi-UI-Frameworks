import { combineReducers } from 'redux'
import calculator from './calculator/calculator.reducer.js';
import localization from './localization/localization.reducer.js';

const app = combineReducers({
  calculator,
  localization
});
export default app