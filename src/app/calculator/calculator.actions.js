// NOTE: inside 'pure' boundry
// NOTE: defines actions and their creation

const action_types = {
  BUILD_NUMBER: 'CALC_BUILD_NUMBER',
  COMMIT_OPERATOR: 'CALC_COMMIT_OPERATOR',
  ADD: 'CALC_ADD',
  SUBTRACT: 'CALC_SUBTRACT'
};

const action_creators = {
  BUILD_NUMBER: (singleDigit) => {
    return Object.assign({ type: action_types.BUILD_NUMBER }, { singleDigit });
  },
  COMMIT_OPERATOR: () => {
    return Object.assign({ type: action_types.COMMIT_OPERATOR }, {});
  },
  ADD: () => {
    return Object.assign({ type: action_types.ADD }, {});
  },
  SUBTRACT: () => {
    return Object.assign({ type: action_types.SUBTRACT }, {});
  }
};

module.exports = {
  TYPES: action_types,
  ACTIONS: action_creators
};