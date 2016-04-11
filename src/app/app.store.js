import { createStore } from 'redux'
import reducer from './app.reducer'
import { TYPES as LOCALS } from './localization/localization.actions';

let store = createStore(reducer, { local: LOCALS.ENGLISH });

export default store;