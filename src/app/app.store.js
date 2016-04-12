import { createStore } from 'redux'
import reducer from './app.reducer'
import { TYPES as LOCALS } from './localization/localization.actions';

let store = createStore(reducer, {
  localization: {
    local: LOCALS.ENGLISH
  },
  calculator: {
    value1: '',
    value2: '',
    allowEquals: false,
    hasCommittedOperator: false,
    hasCompletedValue1: false,
    hasCompletedValue2: false,
    total: 0
  }
});

export default store;