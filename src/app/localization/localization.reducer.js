import { TYPES as TYPES } from './localization.actions';
import EnglishLocal from './local.english';
import DroidLocal from './local.droid';

const initial_state = {
  local: TYPES.ENGLISH
};

function localizationReducer(state = initial_state, action) {
  switch (action.type) {
    case TYPES.ENGLISH:
      let local = new EnglishLocal();
      return Object.assign({}, state, {
          local: TYPES.ENGLISH
        },
        local.translate());
    case TYPES.DROID:
      let local = new DroidLocal();
      return Object.assign({}, state, {
          local: TYPES.DROID
        },
        local.translate());
    default:
      return state;
  }
}

export default localizationReducer;