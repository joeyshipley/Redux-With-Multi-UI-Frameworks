const action_types = {
  ENGLISH: 'LOCAL_ENGLISH',
  DROID: 'LOCAL_DROID'
};

const action_creators = {
  ENGLISH: () => {
    return { type: action_types.ENGLISH };
  },
  DROID: () => {
    return { type: action_types.DROID };
  },
};

module.exports = {
  TYPES: action_types,
  ACTIONS: action_creators
};