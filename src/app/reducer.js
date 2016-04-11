import { combineReducers } from 'redux'
import calculatorReducer from './calculator/calculator.reducer.js';
import localizationReducer from './localization/localization.reducer.js';

// TODO: explore searching for all reducers.
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)

const app = combineReducers({
  calculatorReducer,
  localizationReducer
});

export default app