import { createStore } from 'redux'
import reducer from './app.reducer'
import { TYPES as LOCALS } from './localization/localization.actions';

let store = createStore(reducer, {
  local: LOCALS.ENGLISH,
  value1: undefined,
  value2: undefined,
  total: 0
});

export default store;