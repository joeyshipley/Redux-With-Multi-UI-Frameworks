import { Promise as Promise } from 'es6-promise';
import store from '../app.store';
import { ACTIONS as ACTIONS } from './localization.actions';

class LocalizationInteractor {
  constructor() {}

  english() {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.ENGLISH();
      var dispatch = store.dispatch(result);
      return resolve(dispatch);
    });
  }

  droid() {
    return new Promise((resolve, reject) => {
      var result = ACTIONS.DROID();
      var dispatch = store.dispatch(result);
      return resolve(dispatch);
    });
  }
}
export default LocalizationInteractor;