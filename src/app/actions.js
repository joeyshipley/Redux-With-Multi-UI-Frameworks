const action_types = {
  CALC: {
    ADD: 'CALC_ADD',
    SUBTRACT: 'CALC_SUBTRACT'
  }
};

const action_creators = {
  CALC: {
    ADD: (value1, value2) => {
      return Object.assign({ type: action_types.CALC.ADD }, { value1, value2 });
    },
    SUBTRACT: (value1, value2) => {
      return Object.assign({ type: action_types.CALC.SUBTRACT }, { value1, value2 });
    },
  }
};

module.exports = {
  TYPES: action_types,
  ACTIONS: action_creators
};