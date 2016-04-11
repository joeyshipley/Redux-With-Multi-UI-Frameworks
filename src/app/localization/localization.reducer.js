import { TYPES as TYPES } from './localization.actions';
import EnglishLocal from './local.english';
import DroidLocal from './local.droid';

function localization(state = {}, action) {
  var local;

  switch (action.type) {
    case TYPES.ENGLISH:
      local = new EnglishLocal();
      return Object.assign({}, state, {
          local: TYPES.ENGLISH
        },
        local.translate());
    case TYPES.DROID:
      local = new DroidLocal();
      return Object.assign({}, state, {
          local: TYPES.DROID
        },
        local.translate());
    default:
      return state;
  }
}

export default localization;