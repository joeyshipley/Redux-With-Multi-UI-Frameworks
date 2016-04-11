const action_types = {
  ADD: 'CALC_ADD',
  SUBTRACT: 'CALC_SUBTRACT'
};

const action_creators = {
  ADD: (value1, value2) => {
    return Object.assign({ type: action_types.ADD }, { value1, value2 });
  },
  SUBTRACT: (value1, value2) => {
    return Object.assign({ type: action_types.SUBTRACT }, { value1, value2 });
  }
};

module.exports = {
  TYPES: action_types,
  ACTIONS: action_creators
};