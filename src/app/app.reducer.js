import { combineReducers } from 'redux'
import calculator from './calculator/calculator.reducer.js';
import localization from './localization/localization.reducer.js';

// TODO: explore searching for all reducers.
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)

const app = combineReducers({
  calculator,
  localization
});

export default app